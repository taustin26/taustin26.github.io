$(document).ready(function(){
	$('#down-arrow').on('click',function(){
            $('html, body').animate({scrollTop: $(".white-page").offset().top}, 1000);
        });
    });