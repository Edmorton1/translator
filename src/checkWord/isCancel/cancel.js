const fs = require('node:fs');

module.exports = ({log, fileName}) => {
  if (!fs.existsSync(fileName)) {
    log('Files does not exists. Nothing to delete\n');
    return;
  }

  const file = fs.readFileSync(fileName, 'utf-8').split('\n');
  file.splice(file.length - 2, 1);

  fs.writeFileSync(fileName, file.join('\n'), 'utf-8');

  log('Last line was deleted\n');
};
