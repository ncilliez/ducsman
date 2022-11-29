$(document).ready(function(){
	$('.burger').click(function(){
		$('.navigation').toggleClass('open');
        $('.burger, .shadowbox').find('.barre2').toggleClass('add');
		$('.burger, .shadowbox').find('.barre1').toggleClass('add');
		$('.burger, .shadowbox').find('.barre3').toggleClass('add');
	})

});