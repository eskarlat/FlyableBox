[![npm version](https://img.shields.io/npm/v/flyable-box.svg?style=flat-square)](https://www.npmjs.org/package/flyable-box)

[![npm downloads](https://img.shields.io/npm/dm/flyable-box.svg?style=flat-square)](http://npm-stat.com/charts.html?package=flyable-box)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

Using npm:

```bash
$ npm install flyable-box
```

## Example

```js
const FlyableBox = require('flyable-box');

const fb = new FlyableBox({
    el: '.scratchpad',
    topEl: 'header',
    bottomEl: 'footer'
});
```

