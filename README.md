# node-canvas-with-twemoji

This is a module that is able to draw emoji on node-canvas.

## Installation
```shell
$ npm install node-canvas-with-twemoji
```
[npm](https://www.npmjs.com/package/node-canvas-with-twemoji)

## Quick Example
```javascript
const { createCanvas } = require('canvas');
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji');

async function main () {
    const canvas = createCanvas(230, 200);
    const context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.font = '30px Arial';
    await fillTextWithTwemoji(context, 'canvas😉emoji', 10, 100);
}

main();
```

![image](https://user-images.githubusercontent.com/22518033/145718885-919d4d0a-cb80-4e62-bd9d-4205e0d15858.png)


## Dependencies

- node-canvas [GitHub](https://github.com/Automattic/node-canvas)
- twemoji-parser [GitHub](https://github.com/twitter/twemoji-parser)

## Licence

### node-canvas-with-twemoji

Copyright (c) 2020-2021 cagpie / Shun Kobayashi <cagpie@gmail.com>

Code licensed under the MIT License: http://opensource.org/licenses/MIT
