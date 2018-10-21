function burgerMenu() {
    let menuBtn = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu'),
        x = window.matchMedia("(max-width: 768px)");

    function medLis() {
        if (x.matches) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none';
        }
    }

    medLis();

    x.addListener(medLis);

    menuBtn.addEventListener('click', function (event) {

        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }

    });

};

module.exports = burgerMenu;

/*if (document.documentElement.getBoundingClientRect().width > 768) {
        menuBtn.style.display = 'none';
    };

    window.addEventListener('deviceorientation', function (e) {
        if (document.documentElement.getBoundingClientRect().width > 768) {
            menuBtn.style.display = 'none';
        } else {
            menuBtn.style.display = 'block';
        }
    });*/