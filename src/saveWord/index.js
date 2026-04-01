const {translateUrl, addInFile} = require('../utils');

module.exports = (original, translate, ext) => {
  const {log, fileName} = ext;

  log(`${translate}\n`);
  log(`translate url:\n${translateUrl(original)}\n`);

  addInFile(`${original} - ${translate}\n`, `keep-${fileName}`, ext);
  addInFile(`${original};${translate}\n`, `anki-${fileName}`, ext);
};
