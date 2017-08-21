// Smooth scroll animation when clicking the nav links
$('#menu li a').on('click', function(e) {
  e.preventDefault();
  var target = $(this.hash);

  $('html, body').animate({
    scrollTop: target.offset().top
  }, 500);
});
