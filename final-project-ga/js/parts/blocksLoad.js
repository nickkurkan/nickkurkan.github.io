function blocksLoad () {
    let btn = document.querySelector('.button-styles'),
        blocks = document.getElementsByClassName('blocks');

    btn.addEventListener('click', function (e) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            blocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
            btn.classList.add('animated', 'fadeOut');
            let blocksTimerId = setTimeout(function methodName () {
                btn.style.display = 'none';
            }, 1000);
        }
    });
};

module.exports = blocksLoad;