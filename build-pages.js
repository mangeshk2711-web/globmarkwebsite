/*
 * build-pages.js
 * Turns src/template.html (the single source of truth) into one real HTML file per URL:
 *   /            -> index.html
 *   /work/       -> work/index.html     (and about, faqs, blog, contact, privacy, terms)
 * Each file contains ONLY its own page section, with its own title, description and canonical tag.
 * Also writes sitemap.xml and robots.txt.
 *
 * Run with:  npm run build   (builds the CSS first, then runs this)
 * No extra packages needed.
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://globmark.agency'; // TODO: change if the final domain is different
const TEMPLATE = path.join(__dirname, 'src', 'template.html');

const PAGES = {
  home:    { route: '/' },
  work:    { route: '/work/',    title: 'Our Work & Case Studies | Globmark',
             desc: 'Sample projects showing how Globmark approaches web development, performance marketing and SEO. Real client case studies are coming soon.' },
  about:   { route: '/about/',   title: 'About Globmark | Web Development & Performance Marketing Agency',
             desc: 'Learn about Globmark, a digital agency combining web development, performance marketing and SEO for growing brands in India and worldwide.' },
  faqs:    { route: '/faqs/',    title: 'FAQs | Globmark',
             desc: 'Answers to common questions about Globmark web development, advertising, SEO, timelines and pricing.' },
  blog:    { route: '/blog/',    title: 'Blog | Globmark',
             desc: 'Practical articles on SEO, page speed, paid ads and website design from the Globmark team.' },
  contact: { route: '/contact/', title: 'Contact & Free Strategy Audit | Globmark',
             desc: 'Request a free strategy audit from Globmark. Tell us about your business and we will get back to you.' },
  privacy: { route: '/privacy/', title: 'Privacy Policy | Globmark',
             desc: 'How Globmark collects, uses and protects your information when you use our website and contact forms.' },
  terms:   { route: '/terms/',   title: 'Terms of Service | Globmark',
             desc: 'The terms for using the Globmark website and requesting a free strategy audit.' }
};

const template = fs.readFileSync(TEMPLATE, 'utf8');

// ---- find a <div id="page-xxx"> block, counting nested divs so we cut the exact block ----
function findBlock(html, id) {
  const start = html.indexOf(`<div id="page-${id}"`);
  if (start === -1) throw new Error('Page block not found: ' + id);
  const re = /<div\b|<\/div>/g;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return [start, re.lastIndex];
  }
  throw new Error('Unclosed block: ' + id);
}

function setMeta(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error('Meta tag not found: ' + pattern);
  return html.replace(pattern, () => replacement);
}
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function build(pageId) {
  const cfg = PAGES[pageId];
  let html = template;

  // 1. keep only this page's section (the others live on their own URLs)
  for (const other of Object.keys(PAGES)) {
    if (other === pageId) continue;
    const [s, e] = findBlock(html, other);
    html = html.slice(0, s) + html.slice(e);
  }
  const [bs, be] = findBlock(html, pageId);
  html = html.slice(0, bs) + html.slice(bs, be).replace('class="page-view hidden"', 'class="page-view"') + html.slice(be);

  // 2. per-page head tags
  const url = SITE + cfg.route;
  if (pageId !== 'home') {
    html = setMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(cfg.title)}</title>`);
    html = setMeta(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(cfg.desc)}">`);
    html = setMeta(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(cfg.title)}">`);
    html = setMeta(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(cfg.desc)}">`);
    html = setMeta(html, /<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(cfg.title)}">`);
    html = setMeta(html, /<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${esc(cfg.desc)}">`);
  }
  html = setMeta(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = setMeta(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);

  // 3. FAQPage structured data only belongs on the FAQ page (it must match visible content)
  html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (m, json) => {
    const data = JSON.parse(json);
    if (pageId !== 'faqs') data['@graph'] = data['@graph'].filter(n => n['@type'] !== 'FAQPage');
    return '<script type="application/ld+json">\n' + JSON.stringify(data, null, 2) + '\n  </script>';
  });

  // 4. asset paths: sub-pages sit one folder deep, so they use ../ (works on a web server AND when opened by double-click)
  if (pageId !== 'home') {
    html = html
      .replace('href="styles.css"', 'href="../styles.css"')
      .replace('src="script.js"', 'src="../script.js"')
      .replace('href="assets/fonts/', 'href="../assets/fonts/');
  }

  // 5. tell script.js which page this is
  const root = pageId === 'home' ? '' : '../';
  html = html.replace(/<body /, `<body data-page="${pageId}" data-root="${root}" `);

  const outDir = pageId === 'home' ? __dirname : path.join(__dirname, pageId);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  return path.relative(__dirname, path.join(outDir, 'index.html'));
}

const built = Object.keys(PAGES).map(build);

// ---- sitemap.xml & robots.txt ----
const today = new Date().toISOString().slice(0, 10);
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  Object.values(PAGES).map(p => `  <url>\n    <loc>${SITE}${p.route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log('Built pages:', built.join(', '));
console.log('Wrote sitemap.xml and robots.txt');
