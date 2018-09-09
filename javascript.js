var $ = jQuery.noConflict()
$(window).scroll(function(){
  var scroll = $(this).scrollTop()
  $(".section1").css({"background-position":"0px "+scroll/2+"px"})
})


'use strict';
/**
* file: isVideoVisibleOrNot.html
* purpose: Er min video synlig nu?
**/

// scroll-eventlistener
window.addEventListener("scroll", function() {
console.log('scroll ...'); // test

// hvis erJegHer er synlig, så ...
if (elFllVsbl(erJegHer)) {
console.log(elFllVsbl(erJegHer)); // test

if (!(myVideo.curentTime > 0)) {
myVideo.load(); // load the video
myVideo.play(); // play audio
}

} else {
console.log(elFllVsbl(erJegHer)); // test
myVideo.pause();
myVideo.currentTime = 0; // rewind the sound
}

})

// funktionen tester om videoen er synlig
// og returnerer true eller false
function elFllVsbl(el) {
return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
