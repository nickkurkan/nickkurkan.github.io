function calculator() {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price'),
        total = 0,
        a = 0,
        b = 0,
        c = 0,
        d = 1;

    size.addEventListener('change', ()=> {

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

    material.addEventListener('change', ()=> {

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

    options.addEventListener('change', () => {
        
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

    promocode.addEventListener('change', () => {
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