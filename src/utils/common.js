export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1,
    },
    816: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};


export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened && "-100%" };
  }
};