var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [
				{ src: 'image/land1.jpg'},
				{ src: 'image/land2.jpg'},
				{ src: 'image/land3.jpg'}
			];
		} else {
			var responsiveImage = [
			    { src: 'image/land1.jpg'},
				{ src: 'image/land2.jpg'},
				{ src: 'image/land3.jpg'}
			];
		}

$('#slider').vegas({
		overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',
		transition: 'blur',
		transitionDuration: 2000,
		delay: 10000,
		animationDuration: 20000,
		animation: 'kenburns',
		slides: responsiveImage,
	});

$(".btn-view").modaal({
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
        $.scrollify.disable();
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
        $.scrollify.enable();
	}
});


$.scrollify({
	section : ".box",
	scrollbars:"false",
	interstitialSection : "#header",
	easing: "swing", 
    scrollSpeed: 300, 

	before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".box").each(function(i) {
		        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";

      $("#box1").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
    }

  });

function fadeAnime(){
	$('.blurTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		}else{
		$(this).removeClass('blur');
		}
		});	
}

function EachTextAnimeControl() {
	$('.eachTextAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appeartext");

		} else {
			$(this).removeClass("appeartext");
		}
	});
}

$(window).scroll(function () {
	EachTextAnimeControl();
    fadeAnime();
});

$(window).on('load', function () {
 var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 600,
	strokeWidth: 0.2,
	color: '#fff',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {				
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false 
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
});

bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loader_cover-up").addClass("coveranime");
	$(".loader_cover-down").addClass("coveranime");
	$("#splash").fadeOut('slow',function(){
	var element = $(".eachTextAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	EachTextAnimeControl();
    fadeAnime();
    }); 
    });
});

jQuery(function($){
	$(window).on('scroll', function(){
	    var doch = $(document).innerHeight();
		var winh = $(window).innerHeight();
		var bottom = doch - winh;
	if(bottom * 0.8 <= $(window).scrollTop()){
		$('.scroll').hide();
	}else{$('.scroll').fadeIn(400)}
	/*if ($(window).scrollTop() < 2900 ) {
		$('.scroll').fadeIn(400);	  
	}else {
		$('.scroll').fadeOut(400);
	  }*/
	});
  });

  let item = document.getElementsByClassName('grid-item');
  let listCnt = item.length;
  let delaytime = 300;
  for(let i = 0; i < listCnt; i++){
	  setTimeout(function(){
		  item[i].classList.add('show');
	  },delaytime * i);
  }
