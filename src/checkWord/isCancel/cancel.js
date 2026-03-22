const fs = require('node:fs');
const {FILENAME} = require('../../../vars');

module.exports = ({log}) => {
  if (!fs.existsSync(FILENAME)) {
    log('Files does not exists. Nothing to delete\n');
    return;
  }

  const file = fs.readFileSync(FILENAME, 'utf-8').split('\n');
  file.splice(file.length - 2, 1);

  fs.writeFileSync(FILENAME, file.join('\n'), 'utf-8');

  log('Last line was deleted\n');
};
