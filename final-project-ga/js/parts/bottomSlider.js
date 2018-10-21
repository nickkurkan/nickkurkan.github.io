function bottomSlider() {
    let slides = document.getElementsByClassName('feedback-slider-item'),
        nextBtn = document.querySelector('.main-next-btn'),
        prevBtn = document.querySelector('.main-prev-btn'),
        slideIndex = 0;

    slides[0].style.display = 'block';
    slides[1].style.display = 'none';
    slides[2].style.display = 'none';

    let sliderTimer = setInterval(function () {
        slides[slideIndex].style.display = 'none';
        slideIndex++;
        if (slideIndex == slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].classList.remove('fadeInLeft');
        slides[slideIndex].classList.add('animated', 'fadeInRight');
        slides[slideIndex].style.display = 'block';
    }, 10000)

    nextBtn.addEventListener('click', function () {

        slides[slideIndex].style.display = 'none';
        slideIndex++;
        if (slideIndex == slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].classList.remove('fadeInLeft');
        slides[slideIndex].classList.add('animated', 'fadeInRight');
        slides[slideIndex].style.display = 'block';
    });

    prevBtn.addEventListener('click', function () {

        slides[slideIndex].style.display = 'none';
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        slides[slideIndex].classList.remove('fadeInRight');
        slides[slideIndex].classList.add('animated', 'fadeInLeft');
        slides[slideIndex].style.display = 'block';
    });
};

module.exports = bottomSlider;

/*for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('mouseenter', function () {
            clearInterval(sliderTimer);
        });
        slides[i].addEventListener('mouseleave', function () {
            sliderTimer;
        });

    }*/