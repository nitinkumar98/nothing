$(document).ready(function(){
 'use strict';
 
   //*** preloaders     =======
   setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 500);

 // **** navbar scrolling add and remove class   =====
   $(window).on('scroll',function(){
     if($(window).scrollTop())
     {
     	$('nav').addClass('toggleclass');
     }
     else
     {
     	$('nav').removeClass('toggleclass');
     }

	});

   //**** typed js effect ======
   var typed = new Typed(".type", {
	  strings: [
	  "Hello...",
	  "Welcome to my site....",
	  "I am nitin....",
	  "I'm a programmer ",
	  "and",
	  "fullstack developer"
	  ],
	   showCursor: false,
	   startDelay: 50,
	  typeSpeed:0,
	  backSpeed:50,
	  fadeOut: false,
  fadeOutClass: 'typed-fade-in',
  fadeOutDelay: 500,
	  loop:true
	});

   //****** navbar sidebar function initialize ======
   $(document).ready(function(){
    $('.sidenav').sidenav();
  });

 
//******** WOW initialised =====
       new WOW().init();
   //****Modal initialised  =====
   $(document).ready(function(){
    $('.modal').modal();
  });

    ///****skill bar **===
   
     
      jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},8000);
	});
}); 
	
   
   


});