function slider() {
    let slides = document.getElementsByClassName('main-slider-item'),
        slideIndex = 1;

    slides[1].style.display = 'block';
    slides[0].style.display = 'none';

    let sliderTimer = setInterval(function () {

        if (slideIndex == 1) {
            slideIndex = 0;
        } else if (slideIndex == 0) {
            slideIndex = 1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };

        slides[slideIndex].classList.add('animated');
        slides[slideIndex].classList.add('fadeInDown');
        slides[slideIndex].style.display = 'block';

    }, 5000);

    return slideIndex;

}

module.exports = slider;