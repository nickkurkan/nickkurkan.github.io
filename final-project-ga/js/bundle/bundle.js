(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r);
                }, p, p.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
            o(t[i]);
        }
        return o;
    }
    return r;
})()({
    1: [function (require, module, exports) {
        document.addEventListener('DOMContentLoaded', function () {
            var AJAXforms = require('../parts/AJAXforms.js');
            var slider = require('../parts/slider.js');
            var popupDsgnBtn = require('../parts/popupDsgnBtn.js');
            var consultationBtn = require('../parts/consultationBtn.js');
            var giftBtn = require('../parts/giftBtn.js');
            var blocksLoad = require('../parts/blocksLoad.js');
            var calculator = require('../parts/calculator.js');
            var blocksFiltering = require('../parts/blocksFiltering.js');
            var hoverPics = require('../parts/hoverPics.js');
            var scrollingModal = require('../parts/scrollingModal.js');
            var accordion = require('../parts/accordion.js');
            var sixtySecModal = require('../parts/sixtySecModal.js');
            var burgerMenu = require('../parts/burgerMenu.js');
            var bottomSlider = require('../parts/bottomSlider.js');


            AJAXforms();
            slider();
            popupDsgnBtn();
            consultationBtn();
            giftBtn();
            blocksLoad();
            calculator();
            blocksFiltering();
            hoverPics();
            scrollingModal();
            accordion();
            sixtySecModal();
            burgerMenu();
            bottomSlider();
        });
    }, {
        "../parts/AJAXforms.js": 2,
        "../parts/accordion.js": 3,
        "../parts/blocksFiltering.js": 4,
        "../parts/blocksLoad.js": 5,
        "../parts/bottomSlider.js": 6,
        "../parts/burgerMenu.js": 7,
        "../parts/calculator.js": 8,
        "../parts/consultationBtn.js": 9,
        "../parts/giftBtn.js": 10,
        "../parts/hoverPics.js": 11,
        "../parts/popupDsgnBtn.js": 12,
        "../parts/scrollingModal.js": 13,
        "../parts/sixtySecModal.js": 14,
        "../parts/slider.js": 15
    }],
    2: [function (require, module, exports) {
        function AJAXforms() {

            function formsEnable(index, styleText) {
                var message = new Object();
                message.loading = 'Загрузка...';
                message.success = 'Спасибо, мы скоро с вами свяжемся';
                message.failure = 'Что-то пошло не так';

                var form = document.getElementsByTagName('form')[index],
                    input = form.getElementsByTagName('input'),
                    statusMsg = document.createElement('div');

                statusMsg.classList.add('status');
                statusMsg.style.cssText = styleText;

                for (var i = 0; i < input.length; i++) {
                    input[i].addEventListener('keyup', function () {
                        if (this.name == 'name' || this.name == 'message') {
                            return this.value = this.value.replace(/[A-Za-z]/g, '');
                        } else if (this.name == 'phone') {
                            this.value = this.value.replace(/[A-Za-z]/g, '');
                            this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
                        }
                    });

                    input[i].addEventListener('click', function () {
                        if (this.name == 'phone' && this.value.includes('+') == false) {
                            this.value = '+';
                        }
                    });
                    input[i].addEventListener('keypress', function () {
                        if (this.name == 'phone') {
                            this;
                            var old = 0;
                            var curLen = this.value.length;

                            if (curLen < old) {
                                old--;
                                return;
                            }

                            if (curLen == 2) this.value = this.value + "(";

                            if (curLen == 6) this.value = this.value + ")-";

                            if (curLen == 11) this.value = this.value + "-";

                            if (curLen == 14) this.value = this.value + "-";

                            if (curLen > 16) this.value = this.value.substring(0, this.value.length - 1);

                            old++;
                        }
                    });
                }

                form.addEventListener('submit', function (event) {
                    event.preventDefault();

                    // AJAX
                    var request = new XMLHttpRequest();
                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    var formData = new FormData(form);

                    request.send(formData);

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            form.appendChild(statusMsg);
                            statusMsg.innerHTML = message.loading;
                            statusMsg.style.display = 'block';
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                for (var _i = 0; _i < form.children.length; _i++) {
                                    form.children[_i].style.display = 'none';
                                }
                                statusMsg.innerHTML = message.success;
                                form.appendChild(statusMsg);
                                statusMsg.style.display = 'block';
                                // Добавляем контент на страницу
                            } else {
                                for (var _i2 = 0; _i2 < form.children.length; _i2++) {
                                    form.children[_i2].style.display = 'none';
                                }
                                statusMsg.innerHTML = message.failure;
                                form.appendChild(statusMsg);
                                statusMsg.style.display = 'block';                             
                            }
                        }
                    };
                    for (var _i3 = 0; _i3 < input.length; _i3++) {
                        input[_i3].value = '';
                        //Очищаем поля ввода
                    }
                });
            }

            formsEnable(1, "text-align: center; \
    font-weight: bold; \
    font-size: 60px; ");
            formsEnable(2, "text-align: center; \
    font-weight: bold; \
    font-size: 30px; ");
            formsEnable(3, "text-align: center; \
    font-weight: bold; \
    font-size: 30px; ");
        };

        module.exports = AJAXforms;
    }, {}],
    3: [function (require, module, exports) {
        function accordion() {
            var blocks = document.getElementsByClassName('accordion-block'),
                questions = document.getElementsByClassName('accordion-heading');

            var _loop = function _loop(i) {
                blocks[i].style.display = 'none';

                questions[i].addEventListener('click', function () {
                    for (var _i4 = 0; _i4 < blocks.length; _i4++) {
                        if (blocks[_i4].style.display == 'block') {
                            blocks[_i4].style.display = 'none';
                            questions[_i4].classList.remove('ui-accordion-header-active');
                        };
                    };

                    questions[i].classList.add('ui-accordion-header-active');
                    blocks[i].classList.add('animated', 'fadeInDown');
                    blocks[i].style.display = 'block';
                });
            };

            for (var i = 0; i < blocks.length; i++) {
                _loop(i);
            }
        };

        module.exports = accordion;
    }, {}],
    4: [function (require, module, exports) {
        function blocksFiltering() {
            //Кнопки
            var allBtns = document.querySelector('.portfolio-menu'),
                allBtn = document.querySelector('.all'),
                loversBtn = document.querySelector('.lovers'),
                chefBtn = document.querySelector('.chef'),
                girlBtn = document.querySelector('.girl'),
                guyBtn = document.querySelector('.guy'),
                grandmotherBtn = document.querySelector('.grandmother'),
                granddadBtn = document.querySelector('.granddad');
            //Работы
            var allWorks = document.getElementsByClassName('portfolio-block all'),
                loversWorks = document.getElementsByClassName('portfolio-block lovers'),
                chefWorks = document.getElementsByClassName('portfolio-block chef'),
                girlWorks = document.getElementsByClassName('portfolio-block girl'),
                guyWorks = document.getElementsByClassName('portfolio-block guy'),
                grandWorks = document.querySelector('.portfolio-no');

            function filter(btn, blockClass) {
                btn.addEventListener('click', function () {
                    for (var i = 0; i < allWorks.length; i++) {
                        if (allWorks[i].classList.contains(blockClass) == false) {
                            allWorks[i].style.display = 'none';
                        } else {
                            allWorks[i].style.display = 'block';
                        }
                    }

                    grandWorks.style.display = 'none';

                    for (var _i5 = 0; _i5 < allBtns.children.length; _i5++) {
                        allBtns.children[_i5].classList.remove('active');
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
                for (var i = 0; i < allWorks.length; i++) {
                    allWorks[i].style.display = 'none';
                };
                grandWorks.style.display = 'block';

                for (var _i6 = 0; _i6 < allBtns.children.length; _i6++) {
                    allBtns.children[_i6].classList.remove('active');
                }

                grandmotherBtn.classList.add('active');
            });

            granddadBtn.addEventListener('click', function () {
                for (var i = 0; i < allWorks.length; i++) {
                    allWorks[i].style.display = 'none';
                };
                grandWorks.style.display = 'block';

                for (var _i7 = 0; _i7 < allBtns.children.length; _i7++) {
                    allBtns.children[_i7].classList.remove('active');
                }

                granddadBtn.classList.add('active');
            });
        };

        module.exports = blocksFiltering;
    }, {}],
    5: [function (require, module, exports) {
        function blocksLoad() {
            var btn = document.querySelector('.button-styles'),
                blocks = document.getElementsByClassName('blocks');

            btn.addEventListener('click', function (e) {
                for (var i = 0; i < blocks.length; i++) {
                    blocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
                    blocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');
                    btn.classList.add('animated', 'fadeOut');
                    var blocksTimerId = setTimeout(function methodName() {
                        btn.style.display = 'none';
                    }, 1000);
                }
            });
        };

        module.exports = blocksLoad;
    }, {}],
    6: [function (require, module, exports) {
        function bottomSlider() {
            var slides = document.getElementsByClassName('feedback-slider-item'),
                nextBtn = document.querySelector('.main-next-btn'),
                prevBtn = document.querySelector('.main-prev-btn'),
                slideIndex = 0;

            slides[0].style.display = 'block';
            slides[1].style.display = 'none';
            slides[2].style.display = 'none';

            var sliderTimer = setInterval(function () {
                slides[slideIndex].style.display = 'none';
                slideIndex++;
                if (slideIndex == slides.length) {
                    slideIndex = 0;
                }
                slides[slideIndex].classList.remove('fadeInRight');
                slides[slideIndex].classList.add('animated', 'fadeInLeft');
                slides[slideIndex].style.display = 'block';
            }, 10000);

            nextBtn.addEventListener('click', function () {

                slides[slideIndex].style.display = 'none';
                slideIndex++;
                if (slideIndex == slides.length) {
                    slideIndex = 0;
                }
                slides[slideIndex].classList.remove('fadeInRight');
                slides[slideIndex].classList.add('animated', 'fadeInLeft');
                slides[slideIndex].style.display = 'block';
            });

            prevBtn.addEventListener('click', function () {

                slides[slideIndex].style.display = 'none';
                slideIndex--;
                if (slideIndex < 0) {
                    slideIndex = slides.length - 1;
                }
                slides[slideIndex].classList.remove('fadeInLeft');
                slides[slideIndex].classList.add('animated', 'fadeInRight');
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
    }, {}],
    7: [function (require, module, exports) {
        function burgerMenu() {
            var menuBtn = document.querySelector('.burger'),
                menu = document.querySelector('.burger-menu'),
                x = window.matchMedia("(max-width: 768px)");

            function medLis() {
                if (x.matches) {
                    menuBtn.style.display = 'block';
                } else {
                    menuBtn.style.display = 'none';
                }
            }

            medLis();

            x.addListener(medLis);

            menuBtn.addEventListener('click', function (event) {

                if (menu.style.display == 'block') {
                    menu.style.display = 'none';
                } else {
                    menu.style.display = 'block';
                }
            });
        };

        module.exports = burgerMenu;

        /*if (document.documentElement.getBoundingClientRect().width > 768) {
                menuBtn.style.display = 'none';
            };
        
            window.addEventListener('deviceorientation', function (e) {
                if (document.documentElement.getBoundingClientRect().width > 768) {
                    menuBtn.style.display = 'none';
                } else {
                    menuBtn.style.display = 'block';
                }
            });*/
    }, {}],
    8: [function (require, module, exports) {
        function calculator() {
            var size = document.querySelector('#size'),
                material = document.querySelector('#material'),
                options = document.querySelector('#options'),
                promocode = document.querySelector('.promocode'),
                totalValue = document.querySelector('.calc-price'),
                total = 0,
                a = 0,
                b = 0,
                c = 0,
                d = 1;

            size.addEventListener('change', function () {

                switch (size.value) {
                    case 'Выберите размер картины':
                        a = 0;
                        break;
                    case '40x50':
                        a = 500;
                        break;
                    case '50x70':
                        a = 1000;
                        break;
                    case '70x70':
                        a = 1500;
                        break;
                    case '70x100':
                        a = 2000;
                        break;
                }

                total = (a + b + c) * d;

                if (material.value == 'Выберите материал картины') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            material.addEventListener('change', function () {

                switch (material.value) {
                    case 'Выберите материал картины':
                        b = 0;
                        break;
                    case 'Холст из волокна':
                        b = 500;
                        break;
                    case 'Льняной холст':
                        b = 1000;
                        break;
                    case 'Холст из натурального хлопка':
                        b = 1500;
                        break;
                }

                total = (a + b + c) * d;

                if (size.value == 'Выберите размер картины') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            options.addEventListener('change', function () {

                switch (options.value) {
                    case 'Дополнительные услуги':
                        c = 0;
                        break;
                    case 'Покрытие арт-гелем':
                        c = 1000;
                        break;
                    case 'Экспресс-изготовление':
                        c = 1000;
                        break;
                    case 'Доставка готовых работ':
                        c = 500;
                        break;
                }

                total = (a + b + c) * d;

                if (size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            promocode.addEventListener('change', function () {
                if (promocode.value == 'IWANTPOPART') {
                    d = 0.7;
                } else {
                    d = 1;
                }

                total = (a + b + c) * d;

                if (size.value == 'Выберите размер картины' || material.value == 'Выберите материал картины') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });
        };

        module.exports = calculator;
    }, {}],
    9: [function (require, module, exports) {
        function consultationBtn() {
            var btns = document.getElementsByClassName('button-consultation'),
                window = document.querySelector('.popup-consultation'),
                popupCntnt = document.getElementsByClassName('popup-content')[0];

            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener('click', function () {
                    window.classList.add('animated', 'fadeIn');
                    window.style.display = 'block';
                });
            }

            window.addEventListener('click', function (e) {
                if (event.target == popupCntnt || event.target == document.getElementsByClassName('main-form')[0] || event.target == document.getElementsByClassName('form')[1] || event.target == document.getElementsByClassName('form')[1].childNodes[1] || event.target == document.getElementsByClassName('form')[1].childNodes[3] || event.target == document.getElementsByClassName('form')[1].childNodes[5] || event.target == document.getElementsByClassName('form')[1].childNodes[7] || event.target == document.getElementsByClassName('form')[1].childNodes[9] || event.target == document.getElementsByTagName('h4')[18]) {
                    window.style.display = 'block';
                } else {
                    window.style.display = 'none';
                }
            });
        };

        module.exports = consultationBtn;
    }, {}],
    10: [function (require, module, exports) {
        function giftBtn() {
            var gift = document.querySelector('.popup-gift'),
                giftImg = document.querySelector('.fixed-gift'),
                popupCntnt = document.getElementsByClassName('popup-content')[1];

            giftImg.addEventListener('click', function (e) {
                gift.classList.add('animated', 'fadeIn');
                gift.style.display = 'block';
                giftImg.style.display = 'none';
            });

            gift.addEventListener('click', function (event) {
                if (event.target != popupCntnt && event.target != document.getElementsByTagName('h2')[11] && event.target != document.getElementsByTagName('img')[65] && event.target != document.getElementsByTagName('p')[67]) {
                    gift.style.display = 'none';
                }
            });
        };

        module.exports = giftBtn;
    }, {}],
    11: [function (require, module, exports) {
        function hoverPics() {
            var blocks = document.getElementsByClassName('sizes-block');

            function hover(a) {
                blocks[a].addEventListener('mouseenter', function () {
                    var img = blocks[a].children[0];
                    blocks[a].children[1].style.display = 'none';
                    blocks[a].children[2].style.display = 'none';
                    blocks[a].children[3].style.display = 'none';
                    img.src = "img/sizes-" + (a + 1) + "-1.png";
                });

                blocks[a].addEventListener('mouseleave', function () {
                    var img = blocks[a].children[0];
                    blocks[a].children[1].style.display = 'block';
                    blocks[a].children[2].style.display = 'block';
                    blocks[a].children[3].style.display = 'block';
                    img.src = "img/sizes-" + (a + 1) + ".png";
                });

                blocks[a].addEventListener('tap', function (e) {
                    if (blocks[a].children[1].style.display == 'block') {
                        var img = blocks[a].children[0];
                        blocks[a].children[1].style.display = 'none';
                        blocks[a].children[2].style.display = 'none';
                        blocks[a].children[3].style.display = 'none';
                        img.src = "img/sizes-" + (a + 1) + "-1.png";
                    } else {
                        var _img = blocks[a].children[0];
                        blocks[a].children[1].style.display = 'block';
                        blocks[a].children[2].style.display = 'block';
                        blocks[a].children[3].style.display = 'block';
                        _img.src = "img/sizes-" + (a + 1) + ".png";
                    }
                });
            }
            hover(0);
            hover(1);
            hover(2);
            hover(3);
        };

        module.exports = hoverPics;
    }, {}],
    12: [function (require, module, exports) {
        function popupDsgnBtn() {
            var btns = document.getElementsByClassName('button-design'),
                modalDsgn = document.querySelector('.popup-design'),
                close = document.getElementsByClassName('popup-close')[2],
                popupCntnt = document.getElementsByClassName('popup-content')[2],
                form1 = document.getElementsByTagName('form');

            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener('click', function () {
                    modalDsgn.style.display = 'block';


                    for (let i = 1; i < form1[3].children.length; i++) {
                        form1[3].children[i].style.display = 'block';
                        for ( var j = 0; j < form1[3].children.length; j++) {
                            if (form1[3].children[j].classList.contains('status')) {
                                form1[3].children[j].style.display = 'none';
                            }
                        }
                    }

                });
            }

            close.addEventListener('click', function () {
                modalDsgn.style.display = 'none';
            });

            modalDsgn.addEventListener('click', function (event) {
                if (event.target == popupCntnt || event.target == document.getElementsByClassName('main-form')[1] || event.target == document.getElementsByClassName('form')[2] || event.target == document.getElementsByClassName('form')[2].childNodes[1] || event.target == document.getElementsByClassName('form')[2].childNodes[3] || event.target == document.getElementsByClassName('form')[2].childNodes[5] || event.target == document.getElementsByClassName('form')[2].childNodes[7] || event.target == document.getElementsByClassName('form')[2].childNodes[9] || event.target == document.querySelector('.file_uploa').childNodes[1] || event.target == document.querySelector('.file_uploa').childNodes[3] || event.target == document.querySelector('.file_uploa').childNodes[5] || event.target == document.getElementsByTagName('h4')[19]) {
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
    }, {}],
    13: [function (require, module, exports) {
        function scrollingModal() {
            var clicks = 0,
                gift = document.querySelector('.popup-gift'),
                giftImg = document.querySelector('.fixed-gift');

            document.addEventListener('click', function (event) {

                for (var i = 0; i < document.querySelectorAll('button').length; i++) {
                    if (event.target == document.querySelectorAll('button')[i]) {
                        clicks++;
                        console.log(clicks);
                    }
                }
            });

            window.addEventListener('scroll', function (e) {

                if (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight && clicks == 0) {
                    gift.classList.add('animated', 'fadeIn');
                    gift.style.display = 'block';
                    giftImg.style.display = 'none';
                }
            });
        };

        module.exports = scrollingModal;

        //1247
    }, {}],
    14: [function (require, module, exports) {
        function sixtySecModal() {
            var window = document.querySelector('.popup-consultation'),
                modalWindows = document.getElementsByClassName('popup');

            var modalTimer = setTimeout(function () {

                for (var i = 0; i < modalWindows.length; i++) {
                    if (modalWindows[i].style.display == 'block') {
                        window.classList.add('animated', 'fadeIn');
                        window.style.display = 'none';
                    } else {
                        window.classList.add('animated', 'fadeIn');
                        window.style.display = 'block';
                    };
                };
            }, 60000);
        };

        module.exports = sixtySecModal;
    }, {}],
    15: [function (require, module, exports) {
        function slider() {
            var slides = document.getElementsByClassName('main-slider-item'),
                slideIndex = 1;

            slides[1].style.display = 'block';
            slides[0].style.display = 'none';

            var sliderTimer = setInterval(function () {

                if (slideIndex == 1) {
                    slideIndex = 0;
                } else if (slideIndex == 0) {
                    slideIndex = 1;
                }

                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                };

                slides[slideIndex].classList.add('animated');
                slides[slideIndex].classList.add('fadeInDown');
                slides[slideIndex].style.display = 'block';
            }, 5000);

            return slideIndex;
        }

        module.exports = slider;
    }, {}]
}, {}, [1]);