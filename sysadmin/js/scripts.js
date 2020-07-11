const menuButton = document.querySelector('.menu__button');
      const menuList = document.querySelector('.menu__list');

      menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('menu__button--open');
        menuList.classList.toggle('menu__list--open');
      });

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

var modal01 = document.getElementById('modal01');
var modal_01 = document.getElementById("modal_01");
var fact01_off = $('#fact01').;
var audio01 = document.getElementById("audio01");


var modal_01_x = fact01_off;
var modal_01_y = modal_01.offsetTop-100;


modal_01.onclick = function() {
  modal01.style.left = modal_01_x+"px";
  modal01.style.top = modal_01_y+"px";
  modal01.style.display = "block";
  audio01.play();
  return false;
}

$("#modal01").draggable();

var modalclose_01 = document.getElementById("modal-close_01");

modalclose_01.onclick = function () {
  audio01.pause();
  modal01.style.display = "none";
}
