jQuery(document).ready(function($) {
  const fixedSidebar = document.getElementById("fixed-sidebar");
  let alterClass = function() {
    let Reso = document.body.clientWidth;
    if (Reso < 1216) {
      fixedSidebar.classList.add("card");
    } else if (Reso >= 1216) {
      fixedSidebar.classList.remove("card");
    };
  };
  $(window).resize(_.debounce(function(){
    alterClass();
  }, 100));

  alterClass();
});
