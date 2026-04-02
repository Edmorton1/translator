/**
 * @param {(res: import('node-fetch').Response) => string | null} resHandle
 */
module.exports = async (url, resHandle, {log, model}) => {
  const res = await fetch(url);

  if (res.status === 429) {
    log('Too many requests. Try later or change IP or change model in program settings\n');
    return null;
  }

  if (res.status !== 200) {
    log(`${model[0].toUpperCase() + model.slice(1)} translate error\n`);
    log(res.status);
    return null;
  }

  return resHandle;
};
