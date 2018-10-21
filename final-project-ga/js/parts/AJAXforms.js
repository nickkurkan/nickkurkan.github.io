function AJAXforms() {

    function formsEnable(index, styleText) {
        let message = new Object();
        message.loading = 'Загрузка...';
        message.success = 'Спасибо, мы скоро с вами свяжемся';
        message.failure = 'Что-то пошло не так';

        let form = document.getElementsByTagName('form')[index],
            input = form.getElementsByTagName('input'),
            statusMsg = document.createElement('div');

        statusMsg.classList.add('status');
        statusMsg.style.cssText = styleText;

        for (let i = 0; i < input.length; i++) {
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
                if (this.name == 'phone') {this
                    let old = 0;
                    let curLen = this.value.length;

                    if (curLen < old) {
                        old--;
                        return;
                    }

                    if (curLen == 2)
                        this.value = this.value + "(";

                    if (curLen == 6)
                        this.value = this.value + ")-";

                    if (curLen == 11)
                        this.value = this.value + "-";

                    if (curLen == 14)
                        this.value = this.value + "-";

                    if (curLen > 16)
                        this.value = this.value.substring(0, this.value.length - 1);

                    old++;
                }
            });
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // AJAX
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    statusMsg.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        for (let i = 0; i < form.children.length; i++) {
                            form.children[i].style.display = 'none';
                        }
                        form.appendChild(statusMsg);
                        statusMsg.innerHTML = message.success;
                        // Добавляем контент на страницу
                    } else {
                        for (let i = 0; i < form.children.length; i++) {
                            form.children[i].style.display = 'none';
                        }
                        form.appendChild(statusMsg);
                        statusMsg.innerHTML = message.failure;
                    }
                }
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
                //Очищаем поля ввода
            }
        });
    }

    formsEnable(1, "text-align: center; \
    font-weight: bold; \
    font-size: 60px;");
    formsEnable(2, "text-align: center; \
    font-weight: bold; \
    font-size: 30px;");
    formsEnable(3, "text-align: center; \
    font-weight: bold; \
    font-size: 30px;");
};

module.exports = AJAXforms;