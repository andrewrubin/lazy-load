# Lazy-load

This class lets your easily "lazy-load" images, using the IntersectionObserver API. The constructor takes two arguments—a NodeList of images to lazy-load, and an optional "lookahead" value. Lookahead refers to the number of pixels which will be "added" to the trigger area of the viewport.

## Example
```js
import Lazyload from './Lazyload';

const images = document.querySelectorAll('img');

new Lazyload(images, '300px');
```