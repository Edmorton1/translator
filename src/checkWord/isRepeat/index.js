const fs = require('node:fs');
const {FILENAME} = require('../../../vars');

module.exports = (original, {log}) => {
  if (!fs.existsSync(FILENAME)) {
    return false;
  }

  const originals = fs
    .readFileSync(FILENAME, 'utf-8')
    .split('\n')
    .filter((line) => line)
    .map((word) => word.split(' - ')[0]);

  if (originals.some((word) => word === original)) {
    log('This word is already in you list\n');
    return true;
  }

  return false;
};
