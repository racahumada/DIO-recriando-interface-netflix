window.addEventListener('load', () => {
  carousel();
  menuVisible();
});

const carousel = () => {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      },
    },
  });
};

const menuVisible = () => {
  const openMenu = () => {
    nav.classList = 'nav-visible';
  };

  const closeMenu = () => {
    nav.classList.remove('nav-visible');
  };

  const nav = document.querySelector('#menu');
  const btnNav = document.querySelector('.btn-menu');
  const closeNav = document.querySelector('.close-menu');
  btnNav.addEventListener('click', openMenu);
  closeNav.addEventListener('click', closeMenu);
};
