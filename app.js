const Tess = require("tesseract.js")

Tess.recognize('Text.png', 'eng', { logger: log => console.log(log) })
    .then(out => console.log(out.data.text))