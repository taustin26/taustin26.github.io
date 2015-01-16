$(document).ready(function(){
	$('#down-arrow').on('click',function(){
            $('html, body').animate({scrollTop: $("#page-bottom").offset().top}, 1000);
        });
    });