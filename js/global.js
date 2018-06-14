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
  topMenuHeight = 0,
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

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var call1 = document.getElementsByClassName("callModal")[0];
  var call2 = document.getElementsByClassName("callModal")[1];
  var call3 = document.getElementsByClassName("callModal")[2];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal 
  call1.onclick = function() {
      modal.style.display = "block";
  }
  call2.onclick = function() {
    modal.style.display = "block";
  }
  call3.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }


  var btnWeb = document.getElementById('btn-web');
  var btnAndroid = document.getElementById('btn-android');
  var listWeb = document.getElementById('listWeb');
  var listAndroid = document.getElementById('listAndroid');
  
  btnWeb.onclick = function() {
    listAndroid.style.display = "none";
    listWeb.style.display = "block";
    btnAndroid.className = "";
    btnWeb.className = "active";
  }
  btnAndroid.onclick = function() {
    listAndroid.style.display = "block";
    listWeb.style.display = "none";
    btnAndroid.className = "active";
    btnWeb.className = "";
  }

  // Debounce do Lodash
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




