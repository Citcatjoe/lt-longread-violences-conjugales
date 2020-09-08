jQuery(document).ready(function($)
{
	// LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200 )
	{
		$(".zoom").click(function()
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	}

	// SCROLL WHEN CLICK ON SCROLL INDICATOR
	$(".scroll-indicator").click(function(){
		$('html, body').animate({
			scrollTop:$('section:eq(0)').offset().top -80
		}, 1000);
	});


	var controller = new ScrollMagic.Controller();
	var animatedImageHeight = $('.image-container img').height();
	var defaultOffset = animatedImageHeight / 3;
	var defaultDuration = animatedImageHeight / 2;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////LA FEMME EN ROUGE///////////////////////////////////////////////////////////////////
	var $anim2 = $('#animation-container-2'),
		$anim2Left = $anim2.find('.left'),
		$anim2Right = $anim2.find('.right'),
		$anim2Center = $anim2.find('.center.alpha');

	tlAnim2 =  new TimelineMax({ paused: true });

	function clearAnim2(){
		var clearAnim2tl =  new TimelineMax();
		clearAnim2tl
			.set($anim2Left, {xPercent: '-5', opacity: 0})
			.set($anim2Right, {xPercent: '5', opacity: 0})
			.set($anim2Center, {opacity: 0});
		return clearAnim2tl;
  }
	clearAnim2();


  tlAnim2
  	.to($anim2Center, 1, { opacity: 1,  ease: Power4.easeOut })
  	.to($anim2Left, 1, { xPercent: '0', opacity: 1, ease: Power4.easeOut }, "+=0.5")
  	.to($anim2Right, 1, { xPercent: '0', opacity: 1,  ease: Power4.easeOut }, "+=0.5");

  new ScrollMagic.Scene({
    triggerElement: "#animation-container-2",
    triggerHook: 0.5,
    duration: 1
		})
    .offset(0)
    .on('enter', function (e) {
      tlAnim2.play();
    })
    // .addIndicators()
    .addTo(controller);
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////LES GROSSES MAINS///////////////////////////////////////////////////////////////////
	var $anim3 = $('#animation-container-3'),
		$anim3Left = $anim3.find('.left'),
		$anim3Right = $anim3.find('.right'),
		$anim3Center = $anim3.find('.center');

	tlAnim3 =  new TimelineMax({ paused: true });


	function clearAnim3(){
		var clearAnim3tl =  new TimelineMax();
		clearAnim3tl
			.set($anim3Left, {xPercent: '-5', opacity: 0})
			.set($anim3Right, {xPercent: '5', opacity: 0})
			.set($anim3Center, {opacity: 0});
		return clearAnim3tl;
  }
	clearAnim3();

  tlAnim3
  	.to($anim3Left, 1, { xPercent: '0', opacity: 1, ease: Power4.easeOut })
  	.to($anim3Right, 1, { xPercent: '0', opacity: 1,  ease: Power4.easeOut }, "-=1")
  	.to($anim3Center, 6, { opacity: 1,  ease: Power4.easeOut }, "+=0.5");

  new ScrollMagic.Scene({
	    triggerElement: "#animation-container-3",
	    triggerHook: 0.5,
	    duration: 1
		})
    .offset(0)
    .on('enter', function (e) {
      tlAnim3.play();
    })
    // .addIndicators()
    .addTo(controller);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////SANG///////////////////////////////////////////////////////////////////
	var $anim4 = $('#animation-container-4'),
		$anim4Persos = $anim4.find('.persos'),
		$anim4Enfant = $anim4.find('.enfants');

	tlAnim4 =  new TimelineMax({ paused: true });

	clearAnim4();
	function clearAnim4(){
		clearAnim4 =  new TimelineMax();
		clearAnim4
			.set($anim4Persos, {opacity: 0})
			.set($anim4Enfant, {opacity: 0});
		return clearAnim4;
    }

    tlAnim4
    	.to($anim4Persos, 1.5, { xPercent: '0', opacity: 1, ease: Power4.easeOut })
    	.to($anim4Enfant, 3, { opacity: 1,  ease: Power4.easeOut });

    new ScrollMagic.Scene({
	    triggerElement: "#animation-container-4",
	    triggerHook: 0.5,
	    duration: 1
	})
    .offset(0)
    .on('enter', function (e) {
      tlAnim4.play();
    })
    // .addIndicators()
    .addTo(controller);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
var $anim5 = $('#animation-container-5'),
  $anim5Left = $anim5.find('.left'),
  $anim5Right = $anim5.find('.right'),
  $anim5Center = $anim5.find('.center');

tlAnim5 =  new TimelineMax({ paused: true });

clearAnim5();
function clearAnim5(){
  clearAnim5 =  new TimelineMax();
  clearAnim5
    .set($anim5Left, {xPercent: '-5', opacity: 0})
    .set($anim5Right, {xPercent: '5', opacity: 0})
    .set($anim5Center, {opacity: 0});
  return clearAnim5;
  }

  tlAnim5
    .to($anim5Center, 1, { opacity: 1,  ease: Power4.easeOut }, "+=0.5")
		.to($anim5Left, 2, { xPercent: '0', opacity: 1, ease: Power4.easeOut })
    .to($anim5Right, 2, { xPercent: '0', opacity: 1,  ease: Power4.easeOut }, "-=1");


  new ScrollMagic.Scene({
    triggerElement: "#animation-container-5",
    triggerHook: 0.5,
    duration: 1
})
  .offset(0)
  .on('enter', function (e) {
    tlAnim5.play();
  })
  // .addIndicators()
  .addTo(controller);

}); // end ready()
