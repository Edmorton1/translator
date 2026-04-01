const checkWord = require('./checkWord');
const saveWord = require('./saveWord');
const translateWord = require('./translateWord');

/**
 * @typedef {Object} Extensions
 * @property {() => void} log
 * @property {string} fileName
 * @property {string} folderPath
 * */

class Translator {
  #ext;

  /** @param {Extensions} ext */
  constructor(ext) {
    this.#ext = ext;
  }

  check = (word) => {
    return checkWord(word, this.#ext);
  };

  /**
   * @param {string} original
   * @param {string} translate
   * @param {string} [folderPath] If not passed, the path from ext.folderPath is used
   */
  save = (original, translate, folderPath = null) => {
    const resolvedFolderPath = folderPath ?? this.#ext.folderPath;

    return saveWord(original, translate, {
      ...this.#ext,
      folderPath: resolvedFolderPath
    });
  };

  translate = (original) => {
    return translateWord(original, this.#ext);
  };
}

module.exports = Translator;
