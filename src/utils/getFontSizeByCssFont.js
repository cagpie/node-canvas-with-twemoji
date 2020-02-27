// Get font size by cssFont and Return size in px.
module.exports = function getFontSizeByCssFont (cssFont) {
  // px 
  const pxMatch = cssFont.match(/([0-9]+)px/);
  if (pxMatch) {
    return Number(pxMatch[1]);
  }

  // default
  return 10;
}
