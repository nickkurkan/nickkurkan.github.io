/* App constructor */

if (document.querySelector(".estimate-form_size")) {
  let sizeSection = document.querySelector(".estimate-form_size"),
    btnsSize = sizeSection.querySelectorAll(".estimate-form_size_btn"),
    btnsSizeInputs = sizeSection.querySelectorAll("input"),
    UISection = document.querySelector(".estimate-form_ui"),
    btnsUI = UISection.querySelectorAll(".estimate-form_ui_btn"),
    btnsUIInputs = UISection.querySelectorAll("input"),
    UIImg = UISection.querySelectorAll("img"),
    apiSection = document.querySelector(".estimate-form_api"),
    btnsApi = apiSection.querySelectorAll(".estimate-form_api_btn"),
    btnsApiInputs = apiSection.querySelectorAll("input"),
    securitySection = document.querySelector(".estimate-form_security"),
    btnsSecurity = securitySection.querySelectorAll(".estimate-form_security_btn"),
    btnsSecurityInputs = securitySection.querySelectorAll("input"),
    securityImg = securitySection.querySelectorAll("img");

  for (let i = 0; i < btnsSizeInputs.length; i++) {
    btnsSizeInputs[i].addEventListener("change", function() {
      for (let j = 0; j < btnsSize.length; j++) {
        btnsSize[j].classList.remove("checked");
        btnsSize[j].classList.add("hover-dark");
      }
      btnsSize[i].classList.add("checked");
      btnsSize[i].classList.remove("hover-dark");
    });
  }

  for (let i = 0; i < btnsUIInputs.length; i++) {
    btnsUIInputs[i].addEventListener("change", function() {
      for (let j = 0; j < btnsUI.length; j++) {
        btnsUI[j].classList.remove("checked-dark");
        btnsUI[j].classList.add("hover-blue");
        UIImg[j].classList.add("img-invert");
      }
      btnsUI[i].classList.add("checked-dark");
      btnsUI[i].classList.remove("hover-blue");
      UIImg[i].classList.remove("img-invert");
    });
  }

  for (let i = 0; i < btnsApiInputs.length; i++) {
    btnsApiInputs[i].addEventListener("change", function() {
      if (btnsApiInputs[i].checked) {
        btnsApi[i].classList.toggle("hover-dark");
        btnsApi[i].style.backgroundColor = "#fff";
      } else {
        btnsApi[i].classList.toggle("hover-dark");
        btnsApi[i].style.backgroundColor = "";
      }
    });
  }

  for (let i = 0; i < btnsSecurityInputs.length; i++) {
    btnsSecurityInputs[i].addEventListener("change", function() {
      if (btnsSecurityInputs[i].checked) {
        btnsSecurity[i].classList.toggle("hover-blue");
        btnsSecurity[i].style.backgroundColor = "#fff";
        btnsSecurity[i].classList.toggle("checked-dark");
        securityImg[i].classList.toggle("img-invert");
      } else {
        btnsSecurity[i].classList.toggle("hover-blue");
        btnsSecurity[i].style.backgroundColor = "";
        btnsSecurity[i].classList.toggle("checked-dark");
        securityImg[i].classList.toggle("img-invert");
      }
    });
  }
}

/* Pop-Up script */

if (document.querySelector(".popup")) {
  let btnPopup = document.querySelector(".btn-contact"),
    btnPopup1 = document.querySelector(".btn-request"),
    popup = document.querySelector(".popup"),
    btnPopupClose = popup.querySelector(".close");

  btnPopup.addEventListener("click", function() {
    popup.classList.add("popup__active");
  });

  btnPopup1.addEventListener("click", function() {
    popup.classList.add("popup__active");
  });

  btnPopupClose.addEventListener("click", function() {
    popup.classList.remove("popup__active");
  });
}
