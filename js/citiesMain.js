document.addEventListener('DOMContentLoaded', function () {

  let ctsBtn = document.getElementsByClassName('btn-cities')[0],
     ctsList = document.getElementsByClassName('cities-other-list')[0],
     menuBtn = document.getElementsByClassName('btn-menu')[0],
     menuMobile = document.getElementsByClassName('menu-mobile')[0];

  let clicks = true;
  let menuClicks = true;
  ctsBtn.addEventListener('click', function () {
    showCities();
  });

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault;
    this.classList.toggle('btn-menu-active')
    showMenu();
  });

  function showCities() {
    if (clicks) {
      clicks = false;
      
      ctsList.classList.remove('cities-other-list');
      ctsList.classList.add('cities-other-list-active');
    } else {
      clicks = true;

      ctsList.classList.remove('cities-other-list-active');
      ctsList.classList.add('cities-other-list');
    }
  }

  function showMenu () {
    if(menuClicks) {
      menuMobile.classList.toggle('menu-mobile-active');
      menuClicks = false;
    } else {
      menuMobile.classList.toggle('menu-mobile-active');
      menuClicks = true;
    }
  }

});