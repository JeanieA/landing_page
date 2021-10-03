// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;
// // const scrollTop = window.scrollTop();

// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElements = document.querySelectorAll('.has-fade');

// btnHamburger.addEventListener('click', function() {
//   console.log('click hamburger');
  
//   if(header.classList.contains('open')){  // Close Hamburger Menu
//     body.classList.remove('noscroll');
//     header.classList.remove('open');
//     fadeElements.forEach(function(element){
//       element.classList.remove('fade-in');
//       element.classList.add('fade-out');
//     });
//   }
  
//   else {   // Open Hamburger Menu
//     body.classList.add('noscroll');
//     header.classList.add('open');
//     fadeElements.forEach(function(element){
//       element.classList.remove('fade-out');
//       element.classList.add('fade-in');
//     });
    
//   }
// });

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });    
  } else { // Open Hamburger Menu
      body.classList.add('noscroll');
      header.classList.add('open');
      fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });

  }  
});

(function() {
  
  var autoUpdate = false,
      timeTrans = 4000;
  
	var cdSlider = document.querySelector('.cd-slider'),
		item = cdSlider.querySelectorAll("li"),
		nav = cdSlider.querySelector("nav");

	item[0].className = "current_slide";

	for (var i = 0, len = item.length; i < len; i++) {
		var color = item[i].getAttribute("data-color");
		item[i].style.backgroundColor=color;
	}

	// Detect IE
	// hide ripple effect on IE9
	var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE");
		if ( msie > 0 ) {
			var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
			if (version === 9) { cdSlider.className = "cd-slider ie9";}
	}

	if (item.length <= 1) {
		nav.style.display = "none";
	}

	function prevSlide() {
		var currentSlide = cdSlider.querySelector("li.current_slide"),
			prevElement = currentSlide.previousElementSibling,
			prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1],
			prevColor = prevSlide.getAttribute("data-color"),
			el = document.createElement('span');

		currentSlide.className = "";
		prevSlide.className = "current_slide";

		nav.children[0].appendChild(el);

		var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
		    ripple = nav.children[0].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = prevColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	function nextSlide() {
		var currentSlide = cdSlider.querySelector("li.current_slide"),
			nextElement = currentSlide.nextElementSibling,
			nextSlide = ( nextElement !== null ) ? nextElement : item[0],
			nextColor = nextSlide.getAttribute("data-color"),
			el = document.createElement('span');

		currentSlide.className = "";
		nextSlide.className = "current_slide";

		nav.children[1].appendChild(el);

		var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
			  ripple = nav.children[1].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = nextColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	updateNavColor();

	function updateNavColor () {
		var currentSlide = cdSlider.querySelector("li.current_slide");

		var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
		var	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

		if (item.length > 2) {
			nav.querySelector(".prev").style.backgroundColor = prevColor;
			nav.querySelector(".next").style.backgroundColor = nextColor;
		}
	}

	nav.querySelector(".next").addEventListener('click', function(event) {
		event.preventDefault();
		nextSlide();
		updateNavColor();
	});

	nav.querySelector(".prev").addEventListener("click", function(event) {
		event.preventDefault();
		prevSlide();
		updateNavColor();
	});
  
  //autoUpdate
  setInterval(function() {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    };
	},timeTrans);

})();