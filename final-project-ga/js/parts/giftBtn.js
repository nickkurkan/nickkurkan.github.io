function giftBtn() {
    let gift = document.querySelector('.popup-gift'),
        giftImg = document.querySelector('.fixed-gift'),
        popupCntnt = document.getElementsByClassName('popup-content')[1];

    giftImg.addEventListener('click', function (e) {
        gift.classList.add('animated', 'fadeIn');
        gift.style.display = 'block';
        giftImg.style.display = 'none';
    });

    gift.addEventListener('click', function (event) {
        if ( event.target != popupCntnt && event.target != document.getElementsByTagName('h2')[11]
            && event.target != document.getElementsByTagName('img')[65] && event.target != document.getElementsByTagName('p')[67]) {
            gift.style.display = 'none';
        }
    });
};

module.exports = giftBtn;