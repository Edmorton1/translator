const cancel = require('./cancel');

module.exports = (word, ext) => {
  if (word === 'cancel') {
    cancel(ext);
    return true;
  }
  return false;
};
