function sixtySecModal () {
    let window = document.querySelector('.popup-consultation'),
        modalWindows = document.getElementsByClassName('popup');

    let modalTimer = setTimeout(() => {
        
        for (let i = 0; i < modalWindows.length; i++) {
            if ( modalWindows[i].style.display == 'block' ) {
                window.classList.add('animated', 'fadeIn');
                window.style.display = 'none';
            } else {
                window.classList.add('animated', 'fadeIn');
                window.style.display = 'block';
            };
        };
    }, 60000)
};

module.exports = sixtySecModal;