$(document).ready(function(){
	$('#down-arrow').on('click',function(){
            $('html, body').animate({scrollTop: $(".white-page").offset().top}, 1000);
        });
    });


	$(function() {
	  var moveLeft = 20;
	  var moveDown = 10;

	  $('a#property-coverage-limit-title').hover(function(e) {
	    $('div#property-pop-up').show();
	      //.css('top', e.pageY + moveDown)
	      //.css('left', e.pageX + moveLeft)
	      //.appendTo('body');
	  }, function() {
	    $('div#property-pop-up').hide();
	  });

	  $('a#property-coverage-limit-title').mousemove(function(e) {
	    $("div#property-pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	});

	$(function() {
	  var moveLeft = 20;
	  var moveDown = 10;

	  $('a#liability-coverage-limit-title').hover(function(e) {
	    $('div#liability-pop-up').show();
	      //.css('top', e.pageY + moveDown)
	      //.css('left', e.pageX + moveLeft)
	      //.appendTo('body');
	  }, function() {
	    $('div#liability-pop-up').hide();
	  });

	  $('a#liability-coverage-limit-title').mousemove(function(e) {
	    $("div#liability-pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	});

	$(function() {
	  var moveLeft = 20;
	  var moveDown = 10;

	  $('a#deductible-limit-title').hover(function(e) {
	    $('div#deductible-pop-up').show();
	      //.css('top', e.pageY + moveDown)
	      //.css('left', e.pageX + moveLeft)
	      //.appendTo('body');
	  }, function() {
	    $('div#deductible-pop-up').hide();
	  });

	  $('a#deductible-coverage-limit-title').mousemove(function(e) {
	    $("div#deductible-pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });


});		