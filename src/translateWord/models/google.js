const handler = require('./handler');

// TODO: Удалить
// const fetch = require('node-fetch').default;

// /** @returns {Promise<string | null>} */
// module.exports = async (original, {log}) => {
//   const url =
//     'https://translate.googleapis.com/translate_a/single' +
//     '?client=gtx' +
//     '&sl=en' +
//     '&tl=ru' +
//     '&dt=t' +
//     `&q=${encodeURIComponent(original)}`;

//   const res = await fetch(url);

//   if (res.status === 429) {
//     log('Too many requests. Try later or change IP\n');
//     return null;
//   }

//   if (res.status !== 200) {
//     log('Google Translate error\n');
//     log(res.status);
//     return null;
//   }

//   try {
//     const data = await res.json();

//     return data[0].map((chunk) => chunk[0]).join('');
//   } catch (err) {
//     log(err);
//     return null;
//   }
// };

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
