const isEmpty = require('./isEmpty');
const isCancel = require('./isCancel');

module.exports = (word, ext) => {
  if (isEmpty(word, ext) || isCancel(word, ext)) {
    return true;
  }
  return false;
};
