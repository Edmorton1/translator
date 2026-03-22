const isEmpty = require('./isEmpty');
const isCancel = require('./isCancel');
const isRepeat = require('./isRepeat');

module.exports = (word, ext) => {
  if (isEmpty(word, ext) || isCancel(word, ext) || isRepeat(word, ext)) {
    return true;
  }
  return false;
};
