$(document).click(function(e) {
  if (!$(e.target).hasClass('sidebar')) {
    $('.nav-toggle').click();
  }
});
