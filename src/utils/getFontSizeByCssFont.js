// Get font size by cssFont and Return size in px.
export default function getFontSizeByCssFont (cssFont) {
  // px 
  const pxMatch = cssFont.match(/([0-9]+)px/);
  if (pxMatch) {
    return Number(pxMatch[1]);
  }

  // pt

  // em

  // and others

  // default
  return 10;
}
