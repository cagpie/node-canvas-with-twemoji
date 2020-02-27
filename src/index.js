import drawTextWithTwemoji from './drawTextWithTwemoji';

export async function fillTextWithTwemoji (context, text, x, y, options?) {
  return await drawTextWithTwemoji(context, 'fill', text, x, y, options);
}

export async function strokeTextWithTwemoji (context, text, x, y, options) {
  return await drawTextWithTwemoji(context, 'stroke', text, x, y, options);
}

export function measureText (context, text, options) {
  
}