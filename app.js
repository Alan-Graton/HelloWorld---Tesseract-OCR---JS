const Tess = require("tesseract.js")

Tess.recognize('Images/Mels Copy2.pdf', 'eng', { logger: log => console.log(log) })
    .then(out => console.log(out.data.text))