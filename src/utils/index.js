const fs = require('node:fs');
const {FILENAME} = require('../../vars');

module.exports = {
  translateUrl: (original) =>
    `https://translate.google.com/?hl=ru&sl=en&tl=ru&text=${encodeURIComponent(original)}&op=translate`,

  addInFile: (value) => {
    if (!fs.existsSync(FILENAME)) {
      fs.writeFileSync(FILENAME, '', 'utf-8');
    }

    fs.appendFileSync(FILENAME, value, 'utf-8');
  }
};
