var img = document.querySelectorAll('img');
var select = document.getElementById('select');
// var changeColor = document.querySelectorAll('img');

window.select.onchange = function() {
  // color original
  if (select.value === 'original') {
    img.classList.remove('white-black');
    img.classList.remove('sepia');
    img.classList.remove('negative-colors');
  }
  // color white-black
  if (select.value === 'white-black') {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.add('white-black');
      img[i].classList.remove('sepia');
      img[i].classList.remove('negative-colors');
    }
  }
  // color sepia
  if (select.value === 'sepia') {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove('white-black');
      img[i].classList.add('sepia');
      img[i].classList.remove('negative-colors');
    }
  }
  // color negativo
  if (select.value === 'negative-colors') {
    for (var i = 0; i < img.length; i++) {
      img[i].classList.remove('white-black');
      img[i].classList.remove('sepia');
      img[i].classList.add('negative-colors');
    }
  }
};