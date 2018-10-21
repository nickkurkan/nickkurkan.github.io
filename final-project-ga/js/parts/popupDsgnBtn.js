function popupDsgnBtn() {
    let btns = document.getElementsByClassName('button-design'),
        modalDsgn = document.querySelector('.popup-design'),
        close = document.getElementsByClassName('popup-close')[2];
        popupCntnt = document.getElementsByClassName('popup-content')[2],
        form = document.getElementsByTagName('form');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            modalDsgn.style.display = 'block';
            for (let i = 1; i < form[3].children.length; i++) {
                form[3].children[i].style.display = 'block';
            }

        });
    }

    close.addEventListener('click', function () {
        modalDsgn.style.display = 'none';
    });

    modalDsgn.addEventListener('click', function (event) {
        if (event.target == popupCntnt || event.target == document.getElementsByClassName('main-form')[1] || event.target == document.getElementsByClassName('form')[2]
            || event.target == document.getElementsByClassName('form')[2].childNodes[1] || event.target == document.getElementsByClassName('form')[2].childNodes[3]
            || event.target == document.getElementsByClassName('form')[2].childNodes[5] || event.target == document.getElementsByClassName('form')[2].childNodes[7]
            || event.target == document.getElementsByClassName('form')[2].childNodes[9] || event.target == document.querySelector('.file_uploa').childNodes[1]
            || event.target == document.querySelector('.file_uploa').childNodes[3] || event.target == document.querySelector('.file_uploa').childNodes[5]
            || event.target == document.getElementsByTagName('h4')[19]) {
            modalDsgn.style.display = 'block';
        } else {
            modalDsgn.style.display = 'none';
        }
    });
};

module.exports = popupDsgnBtn;

/*event.target == popupCntnt || event.target == document.getElementsByClassName('main-form')[1] || event.target == document.getElementsByClassName('form')[2]
            || event.target == document.getElementsByClassName('form')[2].childNodes[1] || event.target == document.getElementsByClassName('form')[2].childNodes[3]
            || event.target == document.getElementsByClassName('form')[2].childNodes[5] || event.target == document.getElementsByClassName('form')[2].childNodes[7]
            || event.target == document.getElementsByClassName('form')[2].childNodes[9] || event.target == document.querySelector('.file_uploa').childNodes[1]
            || event.target == document.querySelector('.file_uploa').childNodes[3] || event.target == document.querySelector('.file_uploa').childNodes[5]*/