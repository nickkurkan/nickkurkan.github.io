function scrollingModal() {
    let clicks = 0,
        gift = document.querySelector('.popup-gift'),
        giftImg = document.querySelector('.fixed-gift');
        

    document.addEventListener('click', function (event) {

        for (let i = 0; i < document.querySelectorAll('button').length; i++) {
            if (event.target == document.querySelectorAll('button')[i]) {
                clicks++;
                console.log(clicks);
            }
        }

    });

    window.addEventListener('scroll', function (e) {
        
        if ( document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight && clicks == 0) {
            gift.classList.add('animated', 'fadeIn');
            gift.style.display = 'block';
            giftImg.style.display = 'none';
        }
        
    });
    
};

module.exports = scrollingModal;

//1247