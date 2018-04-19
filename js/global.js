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
});

		
