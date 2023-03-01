new Splide( '.splide', {
    classes: {
        arrows: "control-arrows",
        arrow: "splide__arrow control-arrow",
        prev  : 'splide__arrow--prev your-class-prev',
        next  : 'splide__arrow--next your-class-next',
    },
} );

new Splide('#splide-best-selling', {
  arrows: boolean = true,
    classes: {
      arrows: "control-arrows",
      arrow: "splide__arrow control-arrow",
      prev: "splide__arrow--prev control-arrow--prev",
      next: "splide__arrow--next control-arrow--next",
    },
  }).mount();
  
new Splide('#splide-deal-month', {
  pagination: false,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow",
    prev: "splide__arrow--prev control-arrow--prev",
    next: "splide__arrow--next control-arrow--next",
  },
}).mount();

new Splide('#splide-best-seller', {
  pagination: false,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow",
    prev: "splide__arrow--prev control-arrow--prev",
    next: "splide__arrow--next control-arrow--next",
  },
}).mount();

new Splide( '.splidea', {
  classes: {
      arrows: "control-arrows",
      arrow: "splide__arrow control-arrow",
      prev  : 'splide__arrow--prev your-class-prev',
      next  : 'splide__arrow--next your-class-next',
  },
} );