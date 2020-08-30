$('.owl-carousel').owlCarousel({
    loop:true,    
    margin:24,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


//================== TO MAKE HEADER SCROLL FIX START HERE
const header = document.querySelector
('.main-header');

window.addEventListener('scroll', () => {
const scrollPos = window.scrollY;
if (scrollPos > 10){
header.classList.add('scrolled');
}
else{
    header.classList.remove('scrolled');
}
});
//================== TO MAKE HEADER SCROLL FIX END HERE

// ================== menu
$(function(){
	$('.nav__icon').on('click', function() {
		$(this).toggleClass('active');
		$('nav ul').slideToggle();
	});

	$(window).on('load resize',function(){
		var w = $(window).width();
		var h = $(window).height();
		var x = 1024;
		if (w >= x) {
			$('nav ul').css({ display: 'flex',height: 'auto' });
		}else {
			$('nav ul').css({ display: 'none',height: h + 'px'});
		}
	});
});


//===============top menu dropdown START====================//



// var nav = document.querySelector('.my-nav');
// nav.addEventListener('toggle', function (event) {

//     // Only run if the dropdown is open
//     if (!event.target.open) return;

//     // Get all other open dropdowns and close them
//     var dropdowns = nav.querySelectorAll('.dropdown[open]');
//     Array.prototype.forEach.call(dropdowns, function (dropdown) {
//         if (dropdown === event.target) return;
//         dropdown.removeAttribute('open');
//     });
// }, true);
//===============top menu dropdown END====================//

// homepage scroll button start here
$("#clickdown").click(function() {
    $('html, body').animate({
        scrollTop: $("#cdTarget").offset().top
    }, 2000);
});
// homepage scroll button end here

AOS.init();


const $drowdownArrow = document.querySelector('.fa-angle-down');
const $checkbox = document.getElementById('openDropdown');
const $dropdownMenu = document.querySelector('.dropdown-menu');

$checkbox.addEventListener('change', () => {
  $drowdownArrow.classList.toggle('rotate-dropdown-arrow');
});

$dropdownMenu.addEventListener('click', (e) => {
  $checkbox.checked = false;
  // setting checked to false won't trigger 'change'
  // event, manually dispatch an event to rotate
  // dropdown arrow icon
  $checkbox.dispatchEvent(new Event('change'));
});

