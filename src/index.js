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

  save = (original, translate) => {
    return saveWord(original, translate, this.#ext);
  };

  translate = (original) => {
    return translateWord(original, this.#ext);
  };

  /**
   * @param {keyof Extensions} key
   */
  setExt = (key, value) => {
    this.#ext.log('update ext', key, value);

    this.#ext = {
      ...this.#ext,
      [key]: value
    };
  };
}

module.exports = Translator;
