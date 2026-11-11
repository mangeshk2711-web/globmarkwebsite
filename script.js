    // Current year auto-setter
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    const FA_ICONS = {"robot":[640,512,"M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"],"chart-line":[512,512,"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"],"location-dot":[384,512,"M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"],"instagram":[448,512,"M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"],"code":[576,512,"M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"],"play":[448,512,"M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]};
    function faSvg(cls) {
      const name = (cls.split(/\s+/).find(c => c.startsWith('fa-') && !['fa-solid','fa-brands','fa-regular'].includes(c)) || '').slice(3);
      const ic = FA_ICONS[name];
      return ic ? `<svg class="ic" viewBox="0 0 ${ic[0]} ${ic[1]}" fill="currentColor" aria-hidden="true"><path d="${ic[2]}"/></svg>` : '';
    }

    // ================= CLIENT ROUTER LOGIC =================
    // Every page has its own real URL (see build-pages.js). Each generated HTML file holds only its own
    // page section, so navigate() simply opens that page's URL.
    const validPages = ['home', 'work', 'about', 'faqs', 'blog', 'contact', 'privacy', 'terms'];
    const pageRoutes = {
      home: '/', work: '/work/', about: '/about/', faqs: '/faqs/',
      blog: '/blog/', contact: '/contact/', privacy: '/privacy/', terms: '/terms/'
    };

    let currentPage = null;

    // Real URL on a web server; relative file path when the site is opened by double-click (file://)
    function pageUrl(pageId) {
      if (window.location.protocol === 'file:') {
        const rootPath = document.body.getAttribute('data-root') || '';
        return rootPath + (pageId === 'home' ? '' : pageId + '/') + 'index.html';
      }
      return pageRoutes[pageId];
    }

    // Marks the page that is already in the document as active
    function showPage(pageId) {
      currentPage = pageId;
      document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
      const targetPage = document.getElementById(`page-${pageId}`);
      if (targetPage) targetPage.classList.remove('hidden');

      // Update navigation active states
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-target') === pageId) {
          link.classList.add('text-white', 'font-bold');
          link.classList.remove('text-slate-300');
        } else {
          link.classList.remove('text-white', 'font-bold');
          link.classList.add('text-slate-300');
        }
      });
    }

    function navigate(pageId) {
      if (!validPages.includes(pageId)) {
        pageId = 'home';
      }
      if (pageId === currentPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.location.href = pageUrl(pageId);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    function toggleMobileMenu() {
      mobileMenu.classList.toggle('hidden');
    }
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // ================= MODAL CONTROLS =================
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    }

    // Close any modal when clicking backdrop
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }
      });
    });

    // ================= SEO MODAL TAB SWITCHER =================
    function switchSeoTab(tabKey) {
      ['sitemap', 'robots', 'checklist'].forEach(key => {
        const tabEl = document.getElementById(`seoTab-${key}`);
        const btnEl = document.getElementById(`tabBtn-${key}`);
        if (key === tabKey) {
          tabEl.classList.remove('hidden');
          btnEl.className = 'px-4 py-2 rounded-lg bg-brand-lime text-black font-bold';
        } else {
          tabEl.classList.add('hidden');
          btnEl.className = 'px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20';
        }
      });
    }

    function copyToClipboard(elementId, successMessage) {
      const el = document.getElementById(elementId);
      if (!el) return;
      const text = el.innerText || el.textContent;
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      showToast("Copied to Clipboard", successMessage);
    }

    // ================= SERVICE DATA & MODAL =================
    const servicesData = {
      web: {
        title: "Custom Web Development & Website Design",
        badge: "Built Fast, Designed to Convert",
        icon: "fa-solid fa-code",
        timeline: "7 - 20 Business Days",
        desc: "We design and build tailored websites and web applications that look premium, respond instantly on mobile, and are set up to turn visitors into enquiries.",
        features: [
          "Bespoke Next.js App Router architecture (no clumsy templates)",
          "Custom UI/UX design with Figma prototypes, responsive on every screen",
          "Fast load times worldwide via edge caching & CDN",
          "Built-in technical SEO schema markup & OpenGraph tags",
          "Lead capture connected directly to your CRM & WhatsApp"
        ]
      },
      marketing: {
        title: "High-ROAS Meta & Google Ad Campaigns",
        badge: "Data-Driven Attribution",
        icon: "fa-solid fa-chart-line",
        timeline: "Weekly Optimization Cycles",
        desc: "Full-funnel paid traffic acquisition designed specifically to minimize Cost Per Acquisition (CPA) while protecting your ad budget against click fraud.",
        features: [
          "Granular competitor search capture with negative keyword scrubbing",
          "Meta Conversion API (CAPI) server-side attribution for iOS tracking",
          "High-converting landing page variants with A/B copy tests",
          "Weekly video creative refreshes to combat audience ad fatigue"
        ]
      },
      seo: {
        title: "Search Engine Optimization & Global SEO",
        badge: "High-Intent Search Domination",
        icon: "fa-solid fa-location-dot",
        timeline: "30 - 60 Days To Rank",
        desc: "Capture high-intent customers searching for your services across India and worldwide markets before your competitors can.",
        features: [
          "Full local citation cleanup across high-authority directories",
          "Geo-tagged visual updates and targeted localized service listings",
          "Automated review generation funnel via WhatsApp & SMS",
          "Search engine rank grid tracking across global keyword sets"
        ]
      },
      youtube: {
        title: "YouTube Video Marketing & Discovery Ads",
        badge: "High-Retention Video",
        icon: "fa-solid fa-play",
        timeline: "Ongoing Sprint",
        desc: "Turn viewers into paying accounts with targeted in-stream YouTube advertisements, high-CTR thumbnail designs, and long-tail keyword optimization.",
        features: [
          "Targeted competitor channel ad placement strategy",
          "Scriptwriting frameworks designed to retain audiences past 30 seconds",
          "Thumbnail A/B testing and algorithmic metadata enhancement",
          "Direct lead form integrations inside YouTube mobile playback"
        ]
      },
      social: {
        title: "Social Media Ads (Instagram & LinkedIn)",
        badge: "Brand Recall & Scale",
        icon: "fa-brands fa-instagram",
        timeline: "Ongoing Multi-Channel",
        desc: "Engage, convert, and nurture prospective clients on the exact feeds they spend hours on every day.",
        features: [
          "Scroll-stopping visual and motion graphic ad creatives",
          "Behavioral retargeting sequences tailored to product viewers",
          "High-ticket B2B account-based marketing on LinkedIn",
          "Direct integration with WhatsApp business chat for instant closures"
        ]
      },
      ai: {
        title: "AI Automation for Business",
        badge: "Save Time, Scale Faster",
        icon: "fa-solid fa-robot",
        timeline: "Scoped per workflow",
        desc: "We set up AI chatbots and automated workflows that take over repetitive work such as answering enquiries, following up with leads and updating your tools, so your team can focus on selling and serving customers.",
        features: [
          "AI chatbots for your website and WhatsApp that answer common questions and qualify leads",
          "Automatic lead follow-ups, CRM updates and appointment booking",
          "Workflow automation for reports, invoices and internal tasks (Zapier, Make, n8n)",
          "AI-assisted content and ad creatives with human review before publishing",
          "Custom integrations with the tools you already use"
        ]
      }
    };

    function openServiceDetail(serviceKey) {
      const data = servicesData[serviceKey];
      if (!data) return;

      document.getElementById('serviceModalTitle').textContent = data.title;
      document.getElementById('serviceModalBadge').textContent = data.badge;
      document.getElementById('serviceModalDesc').textContent = data.desc;
      document.getElementById('serviceModalTimeline').textContent = data.timeline;

      const iconEl = document.getElementById('serviceModalIcon');
      iconEl.innerHTML = faSvg(data.icon);

      const featuresEl = document.getElementById('serviceModalFeatures');
      featuresEl.innerHTML = data.features.map(f => `
        <li class="flex items-center gap-2">
          <svg class="ic text-emerald-600" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>
          <span>${f}</span>
        </li>
      `).join('');

      openModal('serviceModal');
    }

    // ================= CASE STUDY DATA & MODAL =================
    const caseStudiesData = {
      mathswaala: {
        title: "MathsWaala EdTech Platform",
        category: "Web Engineering & Next.js",
        overview: "How we migrated an educational portal from sluggish WordPress to custom Next.js, improving speed and test course enrollments.",
        stat1Label: "Page Load Time",
        stat1Val: "TODO",
        stat2Label: "Student Signups",
        stat2Val: "TODO",
        stat3Label: "Lighthouse Score",
        stat3Val: "TODO",
        challenge: "The client suffered heavy server crashes during batch admissions and live test releases. Mobile students dropped off due to slow initial load times.",
        solution: "Globmark engineered a headless Next.js frontend with Supabase serverless database and edge caching on Vercel. We built an instant live test module and one-click UPI checkout.",
        tech: "Next.js 14, Tailwind CSS, Supabase PostgreSQL, Razorpay API"
      },
      waffles: {
        title: "Break Shot Waffles & Cafe",
        category: "Hyperlocal Paid Ads",
        overview: "Hyperlocal Meta video ads aimed at bringing in weekday customers and generating high-margin online direct delivery orders.",
        stat1Label: "ROAS Attained",
        stat1Val: "TODO",
        stat2Label: "Walk-in Footfall",
        stat2Val: "TODO",
        stat3Label: "Ad Spend",
        stat3Val: "TODO",
        challenge: "Relying purely on food aggregator platforms meant losing a large commission on every order, while weekday dine-in traffic was unpredictable.",
        solution: "We deployed localized Instagram Reels targeted within a small local radius featuring decadent waffle preparation, backed by a dynamic WhatsApp discount bot.",
        tech: "Meta Ads Manager, Instagram Reels Creative, WhatsApp Business Bot"
      },
      vedika: {
        title: "Vedika Vedanshi Enterprises",
        category: "Organic SEO & Google Maps",
        overview: "Helping a regional supply firm build a strong Google Maps and local search presence for high-value enterprise keywords.",
        stat1Label: "Monthly Calls",
        stat1Val: "TODO",
        stat2Label: "Map Ranking",
        stat2Val: "TODO",
        stat3Label: "B2B Deals",
        stat3Val: "TODO",
        challenge: "Zero organic presence for commercial inquiries; competitors with older domains dominated every high-intent search query.",
        solution: "Implemented schema-rich local landing pages, claimed and verified localized citations, and deployed automated customer feedback review systems.",
        tech: "Google Business Profile, Schema.org Markup, Review Funnel Automation"
      },
      postal: {
        title: "Postal Knowledge Hub",
        category: "High-Traffic Content Portal",
        overview: "Building a rock-solid, ultra-fast resource repository built for fast, reliable performance under heavy traffic.",
        stat1Label: "Monthly Visits",
        stat1Val: "TODO",
        stat2Label: "Google Core Vitals",
        stat2Val: "TODO",
        stat3Label: "Server Cost",
        stat3Val: "TODO",
        challenge: "Massive PDF archives and study guides were stalling page loads and creating huge bandwidth bills.",
        solution: "Custom static generation with incremental revalidation, global Cloudflare CDN caching, and automated Python content ingestion scripts.",
        tech: "React, Python Scripts, Cloudflare, Fastify Engine"
      },
      apex: {
        title: "Apex Polychem Pvt Ltd",
        category: "B2B Lead Generation",
        overview: "Lowering cost per qualified lead while generating enquiries for industrial polymer supply.",
        stat1Label: "CPL Reduction",
        stat1Val: "TODO",
        stat2Label: "Pipeline Value",
        stat2Val: "TODO",
        stat3Label: "Conversion Rate",
        stat3Val: "TODO",
        challenge: "Wasted budget on consumer polymer search terms and poor landing page copy with no technical specifications for industrial buyers.",
        solution: "Deep negative-keyword scrub of search terms, rebuilt technical landing pages with downloadable lab specs, and conversion tracking on call inquiries.",
        tech: "Google Search Ads, CallRail, Next.js Landing Pages"
      },
      smile: {
        title: "Dr. Sheth's Smile Studio",
        category: "Healthcare SEO",
        overview: "Dominating cosmetic dentistry and dental implant searches with multi-location organic strategy.",
        stat1Label: "New Consults",
        stat1Val: "TODO",
        stat2Label: "Google Reviews",
        stat2Val: "TODO",
        stat3Label: "Treatment Value",
        stat3Val: "TODO",
        challenge: "High ad costs on Google Search for medical keywords made generic pay-per-click unsustainable.",
        solution: "Dominated the organic Google 3-Pack with geotagged clinic patient photos, structured medical local schema, and automated SMS appointment scheduling.",
        tech: "Local SEO, Google Maps API, WhatsApp Booking System"
      }
    };

    function openCaseStudyModal(key) {
      const cs = caseStudiesData[key];
      if (!cs) return;

      document.getElementById('csClientCategory').textContent = cs.category + ' \u2022 Sample Project';
      document.getElementById('csTitle').textContent = cs.title;
      document.getElementById('csOverview').textContent = cs.overview;

      document.getElementById('csStat1Label').textContent = cs.stat1Label;
      document.getElementById('csStat1Val').textContent = cs.stat1Val;
      document.getElementById('csStat2Label').textContent = cs.stat2Label;
      document.getElementById('csStat2Val').textContent = cs.stat2Val;
      document.getElementById('csStat3Label').textContent = cs.stat3Label;
      document.getElementById('csStat3Val').textContent = cs.stat3Val;

      document.getElementById('csChallenge').textContent = cs.challenge;
      document.getElementById('csSolution').textContent = cs.solution;
      document.getElementById('csTech').textContent = cs.tech;

      openModal('caseStudyModal');
    }

    // ================= PORTFOLIO FILTERING =================
    function filterPortfolio(category) {
      const cards = document.querySelectorAll('.portfolio-card');
      const buttons = document.querySelectorAll('.portfolio-tab-btn');

      // Update button styling
      buttons.forEach(btn => {
        if (btn.getAttribute('data-cat') === category) {
          btn.classList.add('bg-brand-lime', 'text-black', 'font-bold');
          btn.classList.remove('bg-white/10', 'text-white');
        } else {
          btn.classList.remove('bg-brand-lime', 'text-black', 'font-bold');
          btn.classList.add('bg-white/10', 'text-white');
        }
      });

      // Filter cards
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // ================= FAQ ACCORDION & SEARCH =================
    function toggleFaq(button) {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('i');
      const isHidden = answer.classList.contains('hidden');

      // Close all other open FAQs
      document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.faq-item button i').forEach(ic => ic.classList.remove('rotate-180'));

      if (isHidden) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    }

    function searchFAQs() {
      const query = document.getElementById('faqSearchInput').value.toLowerCase();
      const items = document.querySelectorAll('.faq-item');

      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // ================= ARTICLES SYSTEM =================
    const articlesData = {
      'seo-guide': {
        category: 'Technical SEO & Search Strategy',
        title: 'A Practical SEO Blueprint to Improve Your Google Rankings',
        date: 'Updated November 2026 • 7 min read',
        body: `
          <p>Organic searches on Google generate the highest commercial intent on the internet. However, many businesses fail Core Web Vitals or configure their schema markup incorrectly.</p>
          <h4 class="font-bold text-slate-800 text-sm mt-3">1. Technical Core Web Vitals &amp; Page Speed</h4>
          <p>Google prioritizes pages that achieve an LCP under 2.5 seconds. Rebuilding key landing pages with Next.js static generation helps reduce layout shifts and improve paint times.</p>
          <h4 class="font-bold text-slate-800 text-sm mt-3">2. Injected JSON-LD Rich Schemas</h4>
          <p>Search engines now parse structured data to render FAQ accordions, business credentials, and service catalogs directly on SERP pages, which can help improve click-through rates.</p>
          <h4 class="font-bold text-slate-800 text-sm mt-3">3. High-Relevance Contextual Internal Linking</h4>
          <p>Every case study, portfolio item, and resource must link systematically to your core service and consultation pages with exact-match anchor text.</p>
        `
      },
      'speed-roas': {
        category: 'Web Engineering & Performance',
        title: "Why Page Speed Matters for Your Meta Ad Results",
        date: 'Updated November 2026 • 5 min read',
        body: `
          <p>When prospective customers tap on an Instagram or Facebook ad, a slow landing page can lose them before they ever see your offer. Many mobile visitors leave if a page takes too long to appear.</p>
<p>Traditional WordPress setups often load heavy CSS and render-blocking plugins. Rebuilding funnels with <strong>Next.js and Tailwind</strong> keeps pages lightweight, so they load faster on typical mobile connections.</p>
<p>Faster landing pages can reduce bounce rates and help more visitors reach your enquiry or checkout step, which can improve the return on the same ad budget. Results vary by business and are not guaranteed.</p>
        `
      },
      'ad-fatigue': {
        category: 'Paid Advertising Intelligence',
        title: 'Fixing Creative Ad Fatigue on Instagram & Facebook',
        date: 'Updated November 2026 • 4 min read',
        body: `
          <p>If your Cost Per Lead (CPL) rises sharply after running the same Meta ad campaign for a few weeks, you are experiencing audience creative fatigue. The algorithm has saturated your core demographic.</p>
          <h4 class="font-bold text-slate-800 text-sm mt-3">The 3-Hook Testing System</h4>
          <p>Instead of filming entirely new videos, shoot 3 different 3-second opening hooks for the same value proposition:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Hook A (Direct Pain Point):</strong> "Tired of spending money on ads with zero sales?"</li>
            <li><strong>Hook B (Curiosity):</strong> "Why modern high-growth brands stopped using WordPress..."</li>
            <li><strong>Hook C (Data Shock):</strong> "Is your website failing this simple Google test?"</li>
          </ul>
          <p>Rotating hooks keeps the Meta algorithm's auction score elevated and can help keep your costs under control.</p>
        `
      },
      'branding-pricing': {
        category: 'Web Design & Trust',
        title: 'Website Design That Builds Trust and Supports Premium Pricing',
        date: 'Updated November 2026 • 6 min read',
        body: `
          <p>Commodity businesses compete on price; authority brands compete on perception and trust. If your website resembles an unpolished template, potential clients immediately negotiate your fees downward.</p>
          <p>At Globmark, we use intentional design systems: distinctive typography combinations, deep midnight backgrounds with radiant focal neon accents, and responsive micro-interactions that help your business look credible and professional from the first visit.</p>
        `
      }
    };

    function readArticle(articleKey) {
      const art = articlesData[articleKey];
      if (!art) return;

      document.getElementById('articleCategory').textContent = art.category;
      document.getElementById('articleTitle').textContent = art.title;
      document.getElementById('articleDate').textContent = art.date;
      document.getElementById('articleBody').innerHTML = art.body;

      openModal('articleModal');
    }

    function copyCurrentUrl() {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      showToast("Link Copied", "Article link copied to your clipboard!");
    }

    // ================= ROAS CALCULATOR WIDGET =================
    function updateCalculator(val) {
      const spend = parseInt(val, 10);
      document.getElementById('spendDisplay').textContent = `₹ ${spend.toLocaleString('en-IN')}`;

      // Dynamic calculations based on spend
      const multiplier = 3.0; // flat illustrative example only, not a prediction

      const projectedRev = Math.round(spend * multiplier);
      const minLeads = Math.round(spend / 380);
      const maxLeads = Math.round(spend / 260);

      document.getElementById('projectedRevenue').textContent = `₹ ${projectedRev.toLocaleString('en-IN')}`;
      document.getElementById('projectedLeads').textContent = `${minLeads} - ${maxLeads}`;
      document.getElementById('projectedRoas').textContent = `${multiplier.toFixed(1)}x`;
    }

    // ================= FORM SUBMISSION & TOAST NOTIFICATION =================
    function showToast(title, msg) {
      const toast = document.getElementById('toastNotification');
      document.getElementById('toastTitle').textContent = title;
      document.getElementById('toastMsg').textContent = msg;

      toast.classList.remove('translate-y-32');
      setTimeout(() => {
        toast.classList.add('translate-y-32');
      }, 4200);
    }

    // TODO: create two forms at formspree.io (or Web3Forms/EmailJS) and paste the endpoints here
    const CONFIG = {
      FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID',
      NEWSLETTER_ENDPOINT: 'https://formspree.io/f/YOUR_NEWSLETTER_ID'
    };

    async function sendForm(e, endpoint, okTitle, okMsg) {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector('button[type=submit]');
      if (endpoint.includes('YOUR_')) {
        console.warn('Form endpoint not configured. Set CONFIG in the script.');
        showToast('Form not connected yet', 'Please WhatsApp us or email hello@globmark.agency.');
        return;
      }
      const data = {};
      form.querySelectorAll('input, select, textarea').forEach((el, i) => {
        if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
        const label = el.closest('div') && el.closest('div').querySelector('label');
        const key = (el.name || (label ? label.textContent : (el.getAttribute('aria-label') || el.placeholder || 'field_' + i))).replace('*', '').trim();
        data[key] = el.value;
      });
      data._subject = 'New Globmark website enquiry';
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = 'Sending...';
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        showToast(okTitle, okMsg);
        form.reset();
      } catch (err) {
        showToast('Could not send', 'Please try again, or WhatsApp / email us directly.');
      } finally {
        btn.disabled = false;
        btn.innerHTML = original;
      }
    }

    function handleConsultationSubmit(e) {
      sendForm(e, CONFIG.FORM_ENDPOINT, 'Request received', 'Thank you! Our team will get back to you soon.');
    }

    function handleNewsletter(e) {
      sendForm(e, CONFIG.NEWSLETTER_ENDPOINT, 'Subscribed!', "You're on the list for our monthly growth & engineering briefings.");
    }

    // ================= INITIAL LOAD ROUTING =================
    window.addEventListener('DOMContentLoaded', () => {
      const thisPage = document.body.getAttribute('data-page') || 'home';
      // Old-style links such as /#work still land on the right page
      const legacyHash = window.location.hash.replace('#', '');
      if (validPages.includes(legacyHash) && legacyHash !== thisPage) {
        window.location.replace(pageUrl(legacyHash));
        return;
      }
      showPage(thisPage);
      // Initialize calculator (only on the page that has it)
      if (document.getElementById('spendDisplay')) updateCalculator(50000);
      // Initialize Chase Motion across entire page
      initFullPageChaseMotion();
    });

    // ================= FULL PAGE CHASE MOTION EFFECT =================
    function initFullPageChaseMotion() {
      const cv = document.getElementById('globalChaseCanvas');
      if (!cv) return;
      const ctx = cv.getContext('2d');
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const GAP = 52;
      let W, H, dpr, cells = [];
      const m = { x: 0, y: 0, active: false, last: 0 };
      const box = { x: 0, y: 0, vx: 0, vy: 0, a: 0 };
      const trail = [];

      function getCssVar(name) {
        return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      }

      function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        cv.width = W * dpr;
        cv.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cells = [];
        for (let y = GAP / 2; y < H; y += GAP) {
          for (let x = GAP / 2; x < W; x += GAP) {
            cells.push([x, y]);
          }
        }
        if (!m.active) {
          m.x = W * 0.72;
          m.y = H * 0.45;
        }
        box.x = box.x || m.x;
        box.y = box.y || m.y;
      }

      function onPointerMove(e) {
        m.x = e.clientX;
        m.y = e.clientY;
        m.active = true;
        m.last = performance.now();
      }

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerMove, { passive: true });
      window.addEventListener('resize', resize);
      resize();

      const heroEl = document.getElementById('chaseHero');
      const CHASE = getCssVar('--chase-color') || '#b6fb1e';
      const CORE = getCssVar('--chase-core') || '#040915';
      const SOFT = getCssVar('--chase-soft') || '#1d3568';
      let cachedBottom = 0, running = false;
      function measure() {
        cachedBottom = (heroEl && heroEl.offsetParent) ? heroEl.getBoundingClientRect().bottom : 0;
      }
      // Start the loop only while the hero is visible; stop it everywhere else
      function kick() {
        measure();
        if (!running && cachedBottom >= 100 && !document.hidden && !reduce) {
          running = true;
          requestAnimationFrame(frame);
        }
      }
      window.addEventListener('scroll', kick, { passive: true });
      window.addEventListener('resize', kick);
      window.addEventListener('hashchange', () => setTimeout(kick, 60));
      document.addEventListener('visibilitychange', kick);

      function frame(t) {
        if (document.hidden || cachedBottom < 100) {
          ctx.clearRect(0, 0, W, H);
          running = false;
          return;
        }
        let heroBottom = cachedBottom;
        
        // Calculate transition factor (1.0 = deep inside hero, 0.0 = completely past hero)
        let heroFactor = 1;
        if (heroBottom < 100) {
          heroFactor = 0;
        } else if (heroBottom < 400) {
          heroFactor = (heroBottom - 100) / 300;
        }

        // Color and scale adjustments depending on whether we are in the hero or lower sections
        const chase = CHASE;
        const core = CORE;
        const softHero = SOFT;
        const softBody = 'rgba(15, 23, 42, 0.12)';

        // Auto-glide trajectory if idle or inactive
        if (!m.active || t - m.last > 2500) {
          m.x = W * 0.62 + Math.cos(t / 1400) * W * 0.22;
          m.y = H * 0.48 + Math.sin(t / 950) * H * 0.25;
        }

        box.vx = (box.vx + (m.x - box.x) * 0.045) * 0.82;
        box.vy = (box.vy + (m.y - box.y) * 0.045) * 0.82;
        box.x += box.vx;
        box.y += box.vy;

        const sp = Math.hypot(box.vx, box.vy);
        box.a += (sp * 0.012 + 0.004) * (box.vx >= 0 ? 1 : -1);
        trail.unshift([box.x, box.y, box.a]);
        if (trail.length > 9) trail.length = 9;

        ctx.clearRect(0, 0, W, H);

        // Size interpolation: 48px in hero down to 18px outside hero
        const baseSize = 18 + (30 * heroFactor);
        const coreSize = 6 + (8 * heroFactor);
        const nearRange = 160 + (100 * heroFactor);

        // Dynamic oriented grid pins responding to box proximity
        for (let i = 0; i < cells.length; i++) {
          const gx = cells[i][0];
          const gy = cells[i][1];
          const dx = box.x - gx;
          const dy = box.y - gy;
          const dist = Math.hypot(dx, dy);
          const near = Math.max(0, 1 - dist / nearRange);
          if (near <= 0) continue;

          const w = (3 + near * 15) * (0.6 + 0.4 * heroFactor);
          const h = (3 + near * 4) * (0.6 + 0.4 * heroFactor);

          ctx.save();
          ctx.translate(gx, gy);
          ctx.rotate(Math.atan2(dy, dx));
          
          if (heroFactor > 0.3) {
            ctx.globalAlpha = (0.15 + near * 0.7) * heroFactor;
            ctx.fillStyle = near > 0.5 ? chase : softHero;
          } else {
            // Subtle, light mode friendly dots for reading comfort
            ctx.globalAlpha = near * 0.4;
            ctx.fillStyle = near > 0.6 ? '#2563eb' : softBody;
          }
          ctx.fillRect(-w / 2, -h / 2, w, h);
          ctx.restore();
        }

        // Ghost motion trail
        for (let j = trail.length - 1; j >= 1; j--) {
          const s = trail[j];
          const size = (baseSize + 2) - j * (heroFactor > 0.5 ? 2.5 : 1);
          if (size <= 2) continue;
          ctx.save();
          ctx.translate(s[0], s[1]);
          ctx.rotate(s[2]);
          ctx.globalAlpha = (0.04 + (1 - j / trail.length) * 0.12) * (0.4 + 0.6 * heroFactor);
          ctx.strokeStyle = heroFactor > 0.3 ? chase : '#2563eb';
          ctx.lineWidth = heroFactor > 0.3 ? 1.5 : 1;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          ctx.restore();
        }

        // Main rotating follower square
        ctx.save();
        ctx.translate(box.x, box.y);
        ctx.rotate(box.a);
        const sc = 1 + Math.min(sp * 0.015, 0.25);
        ctx.scale(sc, sc);

        if (heroFactor > 0.3) {
          ctx.globalAlpha = 0.95;
          ctx.fillStyle = chase;
          ctx.fillRect(-baseSize / 2, -baseSize / 2, baseSize, baseSize);
          ctx.fillStyle = core;
          ctx.fillRect(-coreSize / 2, -coreSize / 2, coreSize, coreSize);
        } else {
          // Compact, semi-translucent follower that doesn't obstruct text
          ctx.globalAlpha = 0.5;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(-baseSize / 2, -baseSize / 2, baseSize, baseSize);
          ctx.fillStyle = chase;
          ctx.fillRect(-coreSize / 2, -coreSize / 2, coreSize, coreSize);
        }
        ctx.restore();

        // Pointer target dot
        if (m.active && t - m.last < 2500) {
          ctx.globalAlpha = heroFactor > 0.3 ? 0.85 : 0.4;
          ctx.fillStyle = heroFactor > 0.3 ? '#ffffff' : '#0284c7';
          ctx.beginPath();
          ctx.arc(m.x, m.y, heroFactor > 0.3 ? 3 : 2, 0, Math.PI * 2);
          ctx.fill();
        }

        if (!reduce) requestAnimationFrame(frame);
      }

      if (reduce) {
        m.x = W * 0.65;
        m.y = H * 0.5;
        box.x = m.x;
        box.y = m.y;
        measure();
        frame(0);
      } else {
        kick();
      }
    }

    // Close the open modal with the Esc key
    document.addEventListener('keydown', function(e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.modal-backdrop:not(.hidden)').forEach(function(m) { m.classList.add('hidden'); });
      document.body.classList.remove('overflow-hidden');
    });
