import Lazyload from './Lazyload';

const images = document.querySelectorAll('img');

new Lazyload(images, '300px');