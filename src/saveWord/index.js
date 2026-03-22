const {translateUrl, addInFile} = require('../utils');
const {saveWord: ankiSaveWord} = require('anki-cli');

module.exports = (original, translate, {log}) => {
  log(`${translate}\n`);
  log(`translate url:\n${translateUrl(original)}\n`);

  addInFile(`${original} - ${translate}\n`);
  ankiSaveWord(original, translate);
};
