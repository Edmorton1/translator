const models = require('./models');

/** @returns {Promise<string | null>} */
module.exports = async (original, ext) => {
  const {model} = ext;

  return models[model](original, ext);
};
