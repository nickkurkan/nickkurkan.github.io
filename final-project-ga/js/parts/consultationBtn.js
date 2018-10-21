function consultationBtn () {
    let btns = document.getElementsByClassName('button-consultation');
    let window = document.querySelector('.popup-consultation');
    popupCntnt = document.getElementsByClassName('popup-content')[0];

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            window.classList.add('animated', 'fadeIn');
            window.style.display = 'block';
        });
    }

    window.addEventListener('click', function (e) {
        if (event.target == popupCntnt || event.target == document.getElementsByClassName('main-form')[0] || event.target == document.getElementsByClassName('form')[1]
            || event.target == document.getElementsByClassName('form')[1].childNodes[1] || event.target == document.getElementsByClassName('form')[1].childNodes[3]
            || event.target == document.getElementsByClassName('form')[1].childNodes[5] || event.target == document.getElementsByClassName('form')[1].childNodes[7]
            || event.target == document.getElementsByClassName('form')[1].childNodes[9] || event.target == document.getElementsByTagName('h4')[18]) {
            window.style.display = 'block';
        } else {
            window.style.display = 'none';
        }
    });
};

module.exports = consultationBtn;