const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  translateUrl: (original) =>
    `https://translate.google.com/?hl=ru&sl=en&tl=ru&text=${encodeURIComponent(original)}&op=translate`,

  addInFile: (value, fileName, {folderPath}) => {
    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '', 'utf-8');
    }

    fs.appendFileSync(filePath, value, 'utf-8');
  }
};
