const {translateUrl, addInFile} = require('../utils');
const {saveWord: ankiSaveWord} = require('anki-cli');

module.exports = (original, translate, ext) => {
  const {log} = ext;

  log(`${translate}\n`);
  log(`translate url:\n${translateUrl(original)}\n`);

  addInFile(`${original} - ${translate}\n`, ext);
  ankiSaveWord(original, translate);
};
