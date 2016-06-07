jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger1 = $('.cd-modal-trigger1'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow1 = $('.cd-modal1');

	var modalTrigger2 = $('.cd-modal-trigger2'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow2 = $('.cd-modal2');
		
	var modalTrigger3 = $('.cd-modal-trigger3'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow3 = $('.cd-modal3');
		
	var modalTrigger4 = $('.cd-modal-trigger4'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow4 = $('.cd-modal4');
		
	var modalTrigger5 = $('.cd-modal-trigger5'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow5 = $('.cd-modal5');				

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger1.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow1.addClass('visible');
		}, delay);
	});

	modalTrigger2.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow2.addClass('visible');
		}, delay);
	});

	modalTrigger3.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		$('body').css('overflow','hidden');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow3.addClass('visible');
		}, delay);
	});

	modalTrigger4.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow4.addClass('visible');
		}, delay);
	});

	modalTrigger5.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		$('body').css('overflow','hidden');
		setTimeout(function(){
			modalWindow5.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow1.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow1.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

		modalWindow2.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow2.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

			modalWindow3.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow3.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

				modalWindow4.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow4.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

					modalWindow5.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow5.removeClass('visible');
		$('body').css('overflow','scroll');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}



// Contact Form


	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields 
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);	
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}
});