module.exports = {
  content: ['./src/template.html', './script.js'],
  theme: { extend: {
    colors: { brand: { lime:'#b6fb1e', limeHover:'#a1e415', dark:'#030814', navy:'#061025',
                       navyCard:'#08142f', blueAccent:'#1d8cf8', surface:'#0b193d' } },
    fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] }
  } }
}
