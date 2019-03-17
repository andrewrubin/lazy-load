# Lazy-load

This class lets your easily "lazy-load" images, using the IntersectionObserver API. The constructor takes two arguments—a NodeList of images to lazy-load, and an optional "lookahead" value. Lookahead refers to the number of pixels which will be "added" to the trigger area of the viewport.

## Usage
Include the Lazyload script in your project
```js
import Lazyload from './Lazyload';
```

Query all the images you'd like to lazy-load, and instanciate the class.
```js
const images = document.querySelectorAll('img');
new Lazyload(images);
```

### Lookahead
The constructor accepts an optional, second parameter. Use it to trigger the loading of an image, a specified number of pixels *before* it hits the viewport.
```js
new Lazyload(images, '500px');
```