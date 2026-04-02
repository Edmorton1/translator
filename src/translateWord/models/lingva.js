const handler = require('./handler');

// TODO: Удалить
// const fetch = require('node-fetch').default;

// /** @returns {Promise<string | null>} */
// module.exports = async (original, {log}) => {
//   if (res.status === 429) {
//     log('Too many request. Try later, or change VPN network\n');

//     return null;
//   }

//   if (res.status !== 200) {
//     log('Lingva Translate server error. Try later\n');
//     log(res);

//     return null;
//   }

//   try {
//     return (await res.json()).translation;
//   } catch (err) {
//     log(err);
//   }
// };

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
