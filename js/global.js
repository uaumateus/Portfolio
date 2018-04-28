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



var camera, scene, renderer;
      var isUserInteracting = false,
      onMouseDownMouseX = 0, onMouseDownMouseY = 0,
      lon = 0, onMouseDownLon = 0,
      lat = 0, onMouseDownLat = 0,
      phi = 0, theta = 0;
      init();
      animate();
      function init() {
        var container, mesh;
        container = document.getElementById( 'image360' );
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
        camera.target = new THREE.Vector3( 0, 0, 0 );
        scene = new THREE.Scene();
        var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
        // invert the geometry on the x-axis so that all of the faces point inward
        geometry.scale( - 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( {
          map: new THREE.TextureLoader().load( 'img/image360.jpg' )
        } );
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );
        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        //
        document.addEventListener( 'dragover', function ( event ) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'copy';
        }, false );
        document.addEventListener( 'dragenter', function ( event ) {
          document.body.style.opacity = 0.5;
        }, false );
        document.addEventListener( 'dragleave', function ( event ) {
          document.body.style.opacity = 1;
        }, false );
        document.addEventListener( 'drop', function ( event ) {
          event.preventDefault();
          var reader = new FileReader();
          reader.addEventListener( 'load', function ( event ) {
            material.map.image.src = event.target.result;
            material.map.needsUpdate = true;
          }, false );
          reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
          document.body.style.opacity = 1;
        }, false );
        //
        window.addEventListener( 'resize', onWindowResize, false );
      }
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }
      function onDocumentMouseDown( event ) {
        //event.preventDefault();
        isUserInteracting = true;
        onMouseDownMouseX = event.clientX;
        onMouseDownMouseY = event.clientY;
        onMouseDownLon = lon;
        onMouseDownLat = lat;
      }
      function onDocumentMouseMove( event ) {
        if ( isUserInteracting === true ) {
          lon = ( onMouseDownMouseX - event.clientX ) * 0.1 + onMouseDownLon;
          lat = ( event.clientY - onMouseDownMouseY ) * 0.1 + onMouseDownLat;
        }
      }
      function onDocumentMouseUp( event ) {
        isUserInteracting = false;
      }

      function animate() {
        requestAnimationFrame( animate );
        update();
      }
      function update() {
        if ( isUserInteracting === false ) {
          lon += 0.1;
        }
        lat = Math.max( - 85, Math.min( 85, lat ) );
        phi = THREE.Math.degToRad( 90 - lat );
        theta = THREE.Math.degToRad( lon );
        camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
        camera.target.y = 500 * Math.cos( phi );
        camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );
        camera.lookAt( camera.target );
        /*
        // distortion
        camera.position.copy( camera.target ).negate();
        */
        renderer.render( scene, camera );
      }
});

		
