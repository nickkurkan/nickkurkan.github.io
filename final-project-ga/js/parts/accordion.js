function accordion () {
    let blocks = document.getElementsByClassName('accordion-block'),
        questions = document.getElementsByClassName('accordion-heading');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';

        questions[i].addEventListener('click', () => {
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].style.display == 'block') {
                    blocks[i].style.display = 'none';
                    questions[i].classList.remove('ui-accordion-header-active')
                };
            };
            
            questions[i].classList.add('ui-accordion-header-active')
            blocks[i].classList.add('animated', 'fadeInDown');
            blocks[i].style.display = 'block';
        });
    }
    
};

module.exports = accordion;