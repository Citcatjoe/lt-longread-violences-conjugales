jQuery(document).ready((function(e){e("img.lazy").lazyload({effect:"fadeIn"}),e(window).width()>1200&&e(".zoom").click((function(){zoom.to({element:e(this)[0]})})),e(".scroll-indicator").click((function(){e("html, body").animate({scrollTop:e("section:eq(0)").offset().top-80},1e3)}));var t=new ScrollMagic.Controller,n=(e(".image-container img").height(),e("#animation-container-2")),i=n.find(".left"),o=n.find(".right"),a=n.find(".center.alpha");function r(){return(r=new TimelineMax).set(i,{xPercent:"-5",opacity:0}).set(o,{xPercent:"5",opacity:0}).set(a,{opacity:0}),r}tlAnim2=new TimelineMax({paused:!0}),r(),tlAnim2.to(a,1,{opacity:1,ease:Power4.easeOut}).to(i,1,{xPercent:"0",opacity:1,ease:Power4.easeOut},"+=0.5").to(o,1,{xPercent:"0",opacity:1,ease:Power4.easeOut},"+=0.5"),new ScrollMagic.Scene({triggerElement:"#animation-container-2",triggerHook:.5,duration:1}).offset(0).on("enter",(function(e){tlAnim2.play()})).addIndicators().addTo(t);var c=e("#animation-container-3"),l=c.find(".left"),s=c.find(".right"),d=c.find(".center");function m(){return(m=new TimelineMax).set(l,{xPercent:"-5",opacity:0}).set(s,{xPercent:"5",opacity:0}).set(d,{opacity:0}),m}tlAnim3=new TimelineMax({paused:!0}),m(),tlAnim3.to(l,1,{xPercent:"0",opacity:1,ease:Power4.easeOut}).to(s,1,{xPercent:"0",opacity:1,ease:Power4.easeOut},"-=1").to(d,6,{opacity:1,ease:Power4.easeOut},"+=0.5"),new ScrollMagic.Scene({triggerElement:"#animation-container-3",triggerHook:.5,duration:1}).offset(0).on("enter",(function(e){tlAnim3.play()})).addIndicators().addTo(t);var f=(y=e("#animation-container-4")).find(".persos"),u=y.find(".enfants");function p(){return(p=new TimelineMax).set(f,{opacity:0}).set(u,{opacity:0}),p}tlAnim4=new TimelineMax({paused:!0}),p(),tlAnim4.to(f,1.5,{xPercent:"0",opacity:1,ease:Power4.easeOut}).to(u,3,{opacity:1,ease:Power4.easeOut}),new ScrollMagic.Scene({triggerElement:"#animation-container-4",triggerHook:.5,duration:1}).offset(0).on("enter",(function(e){tlAnim4.play()})).addIndicators().addTo(t);var y,g=(y=e("#animation-container-4")).find(".left"),w=y.find(".right"),P=y.find(".center");function p(){return(p=new TimelineMax).set(g,{xPercent:"-5",opacity:0}).set(w,{xPercent:"5",opacity:0}).set(P,{opacity:0}),p}tlAnim4=new TimelineMax({paused:!0}),p(),tlAnim4.to(g,1,{xPercent:"0",opacity:1,ease:Power4.easeOut}).to(w,1,{xPercent:"0",opacity:1,ease:Power4.easeOut},"-=1").to(P,6,{opacity:1,ease:Power4.easeOut},"+=0.5"),new ScrollMagic.Scene({triggerElement:"#animation-container-4",triggerHook:.5,duration:1}).offset(0).on("enter",(function(e){tlAnim4.play()})).addIndicators().addTo(t)}));