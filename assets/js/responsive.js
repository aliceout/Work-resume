jQuery(document).ready(function($) {
  var alterClass = function() {
    var Reso = document.body.clientWidth;
    if (Reso < 1216) {
      $('#fixed-sidebar').addClass('card');
    } else if (Reso >= 1216) {
      $('#fixed-sidebar').removeClass('card');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});