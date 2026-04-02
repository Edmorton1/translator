const handler = require('./handler');

module.exports = (original, ext) =>
  handler(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(original)}`,

    async (res) => {
      try {
        const data = await res.json();

        return data[0].map((chunk) => chunk[0]).join('');
      } catch (err) {
        log(err);
        return null;
      }
    },

    ext
  );
