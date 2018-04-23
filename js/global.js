jQuery(document).ready(function($) { 
	//EFEITO DE SCROLL
	$(".scroll").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
	});

	//MOSTRAR MENU MOBILE
	$("#btn-menu").click(function(){
			$("#menu").show();
	});

	//OCUTAR MENU MOBILE
	$("#btn-close").click(function(){
			$("#menu").hide();
	});

	// Cache selectors
var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
       $("#menu").removeClass().addClass(id);

   }                   
});
});

		
