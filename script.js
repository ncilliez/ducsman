$(document).ready(function(){
	$('.burger').click(function(){
		$('.navigation').toggleClass('open');
        $('.burger').find('.barre2').toggleClass('add');
		$('.burger').find('.barre1').toggleClass('add');
		$('.burger').find('.barre3').toggleClass('add');
		 $('.burger').find('.barre').toggleClass('white');
	})

	$('.clic').click(function(){
        // var y = document.querySelector(".ici").src;
        // alert(y);


        var id = $(this).attr("id");



        var monimage = document.getElementById(id).src;

        var b = document.querySelector(".ici");

        b.setAttribute("src", monimage);
    })
});



