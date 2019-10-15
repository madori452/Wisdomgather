  $(document).ready(function() {

	$('a#toggle').on('click',function(){
		$('nav').toggle( "fade", 600 );
		$('.menubars01').toggleClass('rotate01');
		$('.menubars02').toggleClass('none');
		$('.menubars').toggleClass('rotate02');


	});
	var isloaded = false;
	// loading
	setTimeout(function(){ 
	    $(".loader").hide("fade", 1000); isloaded = true;
				}, 4000);
	

	$('.nav-background li').on('mouseover',function(){
		$(this).addClass('hover_li');
	});

	$(window).on('scroll',function(){


		//bakc to top
		if( ($(window).scrollTop() >= $('.index02').offset().top) & ($(window).width() >= 420) ){
			// alert('ddd')
			$('.back-top').show( "fade", 1000 );
		}

		else{
			$('.back-top').hide("fade", 1000 )
		}


	});

	$('.back-top').on('click',function(){
		// alert('xa');
		$('html,body').animate({scrollTop:0},'500');
	});

	$('img.logo').on('click',function(){
		// alert('xa');
		$('html,body').animate({scrollTop:0},'500');
	});


});