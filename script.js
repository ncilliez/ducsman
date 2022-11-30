$(document).ready(function(){
	$('.burger').click(function(){
		$('.navigation').toggleClass('open');
        $('.burger').find('.barre2').toggleClass('add');
		$('.burger').find('.barre1').toggleClass('add');
		$('.burger').find('.barre3').toggleClass('add');
		// $('.burger').find('.barre').toggleClass('white');
	})

});