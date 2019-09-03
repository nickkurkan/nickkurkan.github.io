let advantages = document.querySelector(".advantages"),
  animFrame = advantages.querySelector(".frame-animated-1"),
  animFrame1 = document.querySelector(".frame-animated-2"),
  smallLogo = document.querySelector(".small-logo"),
  fbLogo = document.querySelector(".fb-logo"),
  phone = document.querySelector('.phone'),
  btnLang = document.querySelectorAll(".btn-lang"),
  langList = document.querySelectorAll(".lang-list"),
  advantagesItems = document.querySelectorAll(".advantages-list-item"),
  gallery = document.querySelector(".photo-wrap"),
  gallery1 = document.querySelector(".photo-wrap-1"),
  photos = gallery.querySelectorAll(".photo"),
  photos1 = gallery1.querySelectorAll(".photo"),
  popup = document.querySelector(".popup"),
  btnGallery = document.querySelector(".btn-gallery"),
  burgerBtn = document.querySelector(".burger-menu"),
  burgerMenu = document.querySelector(".navbar-mobile"),
  navMobItems = burgerMenu.querySelectorAll('.nav-item-wrap'),
  burgerClose = burgerMenu.querySelector(".btn-close"),
  popupClose = popup.querySelector(".btn-close"),
  contactBtn = document.querySelectorAll(".btn-contact"),
  oldPos = 0,
  scrollFlag = 0,
  galleryFlag = 0;

function elIsVisible(targetEl) {
  let targetElPosition = {
    top: targetEl.getBoundingClientRect().top + window.pageYOffset,
    bottom: targetEl.getBoundingClientRect().bottom + window.pageYOffset
  };

  let windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  if (targetElPosition.bottom > windowPosition.top && targetElPosition.top < windowPosition.bottom) {
    return true;
  } else {
    return false;
  }
}

function scrollDir() {
  let newPos = window.scrollY;
  if (newPos > oldPos) {
    oldPos = newPos;
    return "down";
  } else if (newPos < oldPos) {
    oldPos = newPos;
    return "up";
  } else {
    oldPos = newPos;
  }
}

let blockScroll = function(event) {
  if (elIsVisible(advantages) == false && scrollDir() == "down" && scrollFlag == 0 && advantages.getBoundingClientRect().top + window.pageYOffset > window.pageYOffset) {
    window.scroll({
      top: advantages.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth"
    });
    scrollFlag = 1;
    smallLogo.classList.toggle("small-logo__active");
    fbLogo.classList.toggle("fb-logo__active");
    phone.classList.toggle('phone__active');
    animFrame.classList.toggle("fadeIn");
    for (let i = 0; i < advantagesItems.length; i++) {
      advantagesItems[i].classList.toggle("advantages-list-item-" + (i + 1));
    }
  } else if (elIsVisible(advantages) == true && scrollDir() == "up" && scrollFlag == 1 && advantages.getBoundingClientRect().top + window.pageYOffset > window.pageYOffset) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    scrollFlag = 0;
    smallLogo.classList.toggle("small-logo__active");
    fbLogo.classList.toggle("fb-logo__active");
    phone.classList.toggle('phone__active');
    for (let i = 0; i < advantagesItems.length; i++) {
      advantagesItems[i].classList.toggle("advantages-list-item-" + (i + 1));
    }
  }
};

let galleryAnimation = function() {
  if (elIsVisible(gallery) == true) {
    for (let i = 0; i < photos.length; i++) {
      photos[i].classList.toggle("photo-animated-" + (i + 1));
    }
    document.removeEventListener("scroll", galleryAnimation);
  }
};

let frameAnimation = function() {
  if (elIsVisible(animFrame1) == true) {
    animFrame1.classList.add("fadeIn");
    document.removeEventListener("scroll", frameAnimation);
  }
};

document.addEventListener("scroll", blockScroll);

document.addEventListener("scroll", galleryAnimation);

document.addEventListener("scroll", frameAnimation);

btnLang[0].addEventListener("click", function(e) {
  btnLang[0].classList.toggle("btn-lang__active");
  langList[0].classList.toggle("lang-list__active");
});

btnLang[1].addEventListener("click", function(e) {
  btnLang[1].classList.toggle("btn-lang__active");
  langList[1].classList.toggle("lang-list__active");
});

btnGallery.addEventListener("click", function(e) {
  if (galleryFlag == 0) {
    for (let i = 0; i < 3; i++) {
      photos1[i].classList.toggle("photo-1__active");
      photos1[i].classList.toggle("photo-animated-" + (i + 1));
    }
    galleryFlag = 1;
  } else if (galleryFlag == 1) {
    for (let i = 0; i < 3; i++) {
      photos1[i + 3].classList.toggle("photo-1__active");
      photos1[i + 3].classList.toggle("photo-animated-" + (i + 1));
    }
    btnGallery.remove();
    galleryFlag = 0;
  }
});

burgerBtn.addEventListener("click", function(e) {
  e.preventDefault();

  burgerMenu.classList.remove("d-none");
  burgerMenu.classList.add("d-block");
});

burgerBtn.addEventListener("click", function(e) {
  e.preventDefault();

  burgerMenu.classList.remove("d-none");
  burgerMenu.classList.add("d-block", "fadeInLeft");
});

burgerClose.addEventListener("click", function(e) {
  e.preventDefault();

  burgerMenu.classList.remove("d-block");
  burgerMenu.classList.add("d-none");
});

for (let i = 0; i < contactBtn.length; i++) {
  contactBtn[i].addEventListener("click", function() {
    popup.classList.toggle("d-none");
    popup.classList.add("fadeIn");
  });
}

popupClose.addEventListener("click", function(e) {
  popup.classList.toggle("d-none");
});

for(let i = 0; i < navMobItems.length; i++) {
  navMobItems[i].addEventListener('click', function (e) {
    burgerMenu.classList.remove("d-block");
    burgerMenu.classList.add("d-none");
  });
}