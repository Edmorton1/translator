const models = require('./models');

/** @returns {Promise<string | null>} */
module.exports = async (original, ext) => {
  const {model, log} = ext;
  log('using model: ', model);

  return models[model](original, ext);
};
