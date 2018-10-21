function hoverPics() {
    let blocks = document.getElementsByClassName('sizes-block');

    function hover(a) {
        blocks[a].addEventListener('mouseenter', function () {
            let img = blocks[a].children[0];
            blocks[a].children[1].style.display = 'none';
            blocks[a].children[2].style.display = 'none';
            blocks[a].children[3].style.display = 'none';
            img.src = `img/sizes-${a+1}-1.png`;
        });

        blocks[a].addEventListener('mouseleave', function () {
            let img = blocks[a].children[0];
            blocks[a].children[1].style.display = 'block';
            blocks[a].children[2].style.display = 'block';
            blocks[a].children[3].style.display = 'block';
            img.src = `img/sizes-${a+1}.png`;
        });

        blocks[a].addEventListener('tap', function (e) {
            if (blocks[a].children[1].style.display == 'block') {
                let img = blocks[a].children[0];
                blocks[a].children[1].style.display = 'none';
                blocks[a].children[2].style.display = 'none';
                blocks[a].children[3].style.display = 'none';
                img.src = `img/sizes-${a+1}-1.png`;
            } else {
                let img = blocks[a].children[0];
                blocks[a].children[1].style.display = 'block';
                blocks[a].children[2].style.display = 'block';
                blocks[a].children[3].style.display = 'block';
                img.src = `img/sizes-${a+1}.png`;
            }
        });
    }
    hover(0);
    hover(1);
    hover(2);
    hover(3);

};

module.exports = hoverPics;