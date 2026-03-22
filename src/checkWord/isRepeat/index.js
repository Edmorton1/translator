const fs = require('node:fs');

module.exports = (original, {log, fileName}) => {
  if (!fs.existsSync(fileName)) {
    return false;
  }

  const originals = fs
    .readFileSync(fileName, 'utf-8')
    .split('\n')
    .filter((line) => line)
    .map((word) => word.split(' - ')[0]);

  if (originals.some((word) => word === original)) {
    log('This word is already in you list\n');
    return true;
  }

  return false;
};
