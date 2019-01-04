$(".galery > div:gt(0)").hide();

setInterval(function() {
  $('.galery > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.galery');
}, 3000);