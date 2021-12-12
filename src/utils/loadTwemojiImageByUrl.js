const { loadImage } = require('canvas');

const cachedTwemojiImages = new Map();

module.exports = function loadTwemojiImageByUrl (url) {
  return new Promise(async (res, rej) => {
    if (cachedTwemojiImages.has(url)) {
      return res(cachedTwemojiImages.get(url));
    }

    try {
      const image = await loadImage(url);
      cachedTwemojiImages.set(url, image);

      res(image);
    } catch (e) {
      rej(e)
    }
  });
}
