document.addEventListener('DOMContentLoaded', function () {

  let ctsBtn = document.getElementsByClassName('btn-cities')[0],
    ctsList = document.getElementsByClassName('cities-other-list')[0];

  let clicks = true;

  ctsBtn.addEventListener('click', function () {
    showCities();
  });

  function showCities() {
    if (clicks) {
      clicks = false;
      
      ctsList.classList.remove('cities-other-list');
      ctsList.classList.add('cities-other-list-active');
    } else {
      clicks = true;

      ctsList.classList.remove('cities-other-list-active');
      ctsList.classList.add('cities-other-list');
    }
  }

});