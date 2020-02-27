const express = require('express');
const { createCanvas } = require('canvas');
const base64 = require('urlsafe-base64');

const { fillTextWithTwemoji } = require('../../src/index');

const app = express();

app.get('/', async (req, res) => {
  const canvas = createCanvas(200, 200);
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 200, 200);

  context.textBaseline = 'top';

  context.fillStyle = '#000000';
  context.font = '30px Arial';
  await fillTextWithTwemoji(context, 'test😉', 10, 10);

  context.fillStyle = '#888888';
  context.font = '18px Arial';
  await fillTextWithTwemoji(context, '我々✨は宇宙人👽だ', 10, 50);

  if (req.query.text) {
    await fillTextWithTwemoji(context, req.query.text, 10, 100);
  }

  const b64 = canvas.toDataURL().split(',');
  const image = base64.decode(b64[1]);

  res.set('Content-Type', 'image/png');
  return res.send(image);
});

app.listen('8080');
