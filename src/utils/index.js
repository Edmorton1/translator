const fs = require('node:fs');

module.exports = {
  translateUrl: (original) =>
    `https://translate.google.com/?hl=ru&sl=en&tl=ru&text=${encodeURIComponent(original)}&op=translate`,

  addInFile: (value, {fileName}) => {
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, '', 'utf-8');
    }

    fs.appendFileSync(fileName, value, 'utf-8');
  }
};
