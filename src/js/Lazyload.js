class Lazyload {

  constructor(images, lookahead) {

    this.images = images;
    this.marginString = lookahead ? `0px 0px ${lookahead} 0px` : '0px 0px 0px 0px';
    this.observerConfig = {
      root: null,
      rootMargin: this.marginString,
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, this.observerConfig);

    this.init();

  }

  init() {
    this.images.forEach((img, i) => {
      this.observer.observe(img);
    })
  }

  loadImage(el) {
    el.src = el.dataset.src;
    el.addEventListener('load', () => {
      el.classList.add('loaded');
    }, {once: true});
  }

};

export default Lazyload;