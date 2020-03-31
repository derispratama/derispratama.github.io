// event pada saat di link di klik
$('.page-scroll').on('click', function(e){

   // ambil isi href
   var href = $(this).attr('href');
   // tangkap elemen yang bersangkutan
   var elemenhref = $(href);


   // pindahkan scrol1.2
   $('html,body').animate({
   	scrollTop: elemenhref.offset().top -50
   },1250, 'easeInOutExpo');

   e.preventDefault();


});

 // parallax

 // about

 $(window).on('load', function(){
 	$('.pkiri').addClass('pmuncul');
 	$('.pkanan').addClass('pmuncul');
 });


 $(window).scroll(function(){
 	var wscroll = $(this).scrollTop();

 	// jumbotron
 	$('.jumbotron img').css({
 		'transform' : 'translate(0px, '+ wscroll/4 +'%)'
 	});


 	$('.jumbotron h1').css({
 		'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
 	});


 	$('.jumbotron p').css({
 		'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
 	});

 	// portofolio

 	if(wscroll > $('.portofolio').offset().top -250){
 		$('.portofolio .thumbnail').each(function(i){
 			setTimeout(function(){
 				$('.portofolio .thumbnail').eq(i).addClass('muncul');

 			}, 300 * (i+1));

 		});

 		
 	}


 });













