const splitEntitiesFromText = require('./utils/splitEntitiesFromText');
const loadTwemojiImageByUrl = require('./utils/loadTwemojiImageByUrl');
const getFontSizeByCssFont = require('./utils/getFontSizeByCssFont');

module.exports = async function drawTextWithEmoji (
  context,
  fillType,
  text,
  x,
  y,
  {
    maxWidth = Infinity, // TODO
    emojiSideMarginPercent = 0.1,
    emojiTopMarginPercent = 0
  } = {}
) {
  const textEntities = splitEntitiesFromText(text);
  const fontSize = getFontSizeByCssFont(context.font);

  const emojiSideMargin = fontSize * emojiSideMarginPercent;
  const emojiTopMargin = fontSize * emojiTopMarginPercent;

  let currentWidth = 0;

  for (let i = 0; i < textEntities.length; i++) {
    const entity = textEntities[i];
    if (typeof entity === 'string') {
      // Common text case
      if (fillType === 'fill') {
        context.fillText(entity, x + currentWidth, y);
      } else {
        context.strokeText(entity, x + currentWidth, y);
      }

      currentWidth += context.measureText(entity).width;
    } else {
      // Emoji case
      // TODO 考慮する baseline
      const emoji = await loadTwemojiImageByUrl(entity.url);
      context.drawImage(emoji, x + currentWidth + emojiSideMargin, y + emojiTopMargin, fontSize, fontSize);

      currentWidth += fontSize + (emojiSideMargin * 2);
    }
  }
}
