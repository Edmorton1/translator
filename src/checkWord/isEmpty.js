module.exports = (word, {log}) => {
  if (!word) {
    log('Word is empty\n');
    return true;
  }

  return false;
};
