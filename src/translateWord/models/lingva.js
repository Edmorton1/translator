const handler = require('./handler');

module.exports = (original, ext) =>
  handler(
    `https://translate.plausibility.cloud/api/v1/en/ru/${original}`,

    async (res) => {
      try {
        return (await res.json()).translation;
      } catch (err) {
        log(err);
      }
    },

    ext
  );
