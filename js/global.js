jQuery(document).ready(function($) { 
  jQuery(window).on('load',function(){
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(1000).fadeOut("slow");
  });
	//EFEITO DE SCROLL
	$(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
  });
  
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
     $(".cabecalho").css('background-color', 'rgb(255,255,255)');
     $("#logo").css('color', '#000');
     $("#btn-menu").css('color', '#2680ff');
    } else {
     $(".cabecalho").css('background-color', 'rgb(0,0,0,0)');
     $("#logo").css('color', '#fff');
     $("#btn-menu").css('color', '#fff');
    }
   });

	//MOSTRAR MENU MOBILE
	$("#btn-menu").click(function(){
			$("#menu").show();
	});

	//OCUTAR MENU MOBILE
	$("#btn-close").click(function(){
			$("#menu").hide();
	});

	//DEFINE A SESSÃO ATUAL NO MENU
	var lastId,
  topMenu = $("#menu"),
  topMenuHeight = 0,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  $(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    
    if (lastId !== id) {
        lastId = id;
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#"+id+"']").parent().addClass("active");
        $("#menu").removeClass().addClass(id);
    }                   
  });

  // MOSTRAR MODAL
  $("#callModal1").on('click', function(){
    $("#modal1").show();
  });
  $("#callModal2").on('click', function(){
    $("#modal2").show();
  });
  $("#callModal3").on('click', function(){
    $("#modal3").show();
  });
  $("#callModal4").on('click', function(){
    $("#modal4").show();
  });
  $("#callModal5").on('click', function(){
    $("#modal5").show();
  });
  // FECHAR MODAL
  $(".close").on('click', function(){
    $("#modal1").hide();
    $("#modal2").hide();
    $("#modal3").hide();
    $("#modal4").hide();
    $("#modal5").hide();
  });


  // ALTERA ENTRE TRABALHOS ANDROID E WEB
  $("#btn-web").on('click', function(){
    $("#listAndroid").hide();
    $("#listWeb").show();
    $("#btn-android").removeClass();
    $("#btn-web").addClass("active");
  });
  $("#btn-android").on('click', function(){
    $("#listAndroid").show();
    $("#listWeb").hide();
    $("#btn-android").addClass("active");
    $("#btn-web").removeClass();
  });
  

  // EFEITOS DOS ELEMENTOS
  debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  (function(){
    var $target = $('.anime'),
      animationClass = 'anime-start',
      offset = $(window).height() * 3/4;

    function animeScroll() {
      var documentTop = $(document).scrollTop();

      $target.each(function(){
        var itemTop = $(this).offset().top;
        if (documentTop > itemTop - offset) {
          $(this).addClass(animationClass);
        } else {
          $(this).removeClass(animationClass);
        }
      });
    }

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 1));
  })();
});


