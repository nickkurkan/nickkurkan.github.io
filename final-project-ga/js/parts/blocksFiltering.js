function blocksFiltering() {
    //Кнопки
    let allBtns = document.querySelector('.portfolio-menu'),
        allBtn = document.querySelector('.all'),
        loversBtn = document.querySelector('.lovers'),
        chefBtn = document.querySelector('.chef'),
        girlBtn = document.querySelector('.girl'),
        guyBtn = document.querySelector('.guy'),
        grandmotherBtn = document.querySelector('.grandmother'),
        granddadBtn = document.querySelector('.granddad');
    //Работы
    let allWorks = document.getElementsByClassName('portfolio-block all'),
        loversWorks = document.getElementsByClassName('portfolio-block lovers'),
        chefWorks = document.getElementsByClassName('portfolio-block chef'),
        girlWorks = document.getElementsByClassName('portfolio-block girl'),
        guyWorks = document.getElementsByClassName('portfolio-block guy'),
        grandWorks = document.querySelector('.portfolio-no');

    function filter(btn, blockClass) {
        btn.addEventListener('click', function () {
            for (let i = 0; i < allWorks.length; i++) {
                if (allWorks[i].classList.contains(blockClass) == false) {
                    allWorks[i].style.display = 'none';
                } else {
                    allWorks[i].style.display = 'block';
                }
            }

            grandWorks.style.display = 'none';
            
            for (let i = 0; i < allBtns.children.length; i++) {
                allBtns.children[i].classList.remove('active');
            }
            
            btn.classList.add('active');
        });
    };
    filter(allBtn, 'all');
    filter(loversBtn, 'lovers');
    filter(chefBtn, 'chef');
    filter(girlBtn, 'girl');
    filter(guyBtn, 'guy');

    grandmotherBtn.addEventListener('click', function () {
        for (let i = 0; i < allWorks.length; i++) {
            allWorks[i].style.display = 'none';
        };
        grandWorks.style.display = 'block';

        for (let i = 0; i < allBtns.children.length; i++) {
            allBtns.children[i].classList.remove('active');
        }
        
        grandmotherBtn.classList.add('active');
    });

    granddadBtn.addEventListener('click', function () {
        for (let i = 0; i < allWorks.length; i++) {
            allWorks[i].style.display = 'none';
        };
        grandWorks.style.display = 'block';

        for (let i = 0; i < allBtns.children.length; i++) {
            allBtns.children[i].classList.remove('active');
        }
        
        granddadBtn.classList.add('active');
    });

};

module.exports = blocksFiltering;