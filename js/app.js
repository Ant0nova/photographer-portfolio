
const worksSlider = $('[data-slider="slick"]');


/* Filter */
const filter = document.querySelectorAll('.portfolio__col');

document.querySelector('.works__nav').addEventListener('click', event=> {
    event.preventDefault();
    if (event.target.className !== 'works__nav-link') return false;

    let filterClass = event.target.dataset['filter'];
    
    filter.forEach(elem=> {
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }

    });
});


/* Modal */

const modalBtn = document.querySelectorAll('.btn, .nav__link--btn, .footer__nav-link--btn, .work');
const modalClose = document.querySelectorAll('.modal__close');
const openDialog = document.getElementsByClassName('modal__dialog');
let timeout = 200;

 modalBtn.forEach(item=> {
    item.addEventListener('click', function(event) { 
        event.preventDefault();
        let modalId = this.getAttribute('data-modal');
        let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        modalElem.classList.add('active');
        document.querySelector('body').classList.add('no-scroll');
        worksSlider.slick('setPosition');
    });
});

    
modalClose.forEach(item=> {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
    });
}); 

document.querySelectorAll('.modal').forEach(item=> {
    item.addEventListener('click',function() {
        this.closest('.modal').classList.remove('active');
        document.querySelector('body').classList.remove('no-scroll');
    });
}); 

document.querySelectorAll('.modal__dialog').forEach(item=> {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}); 


/* Slider: https://kenwheeler.github.io/slick/ */

worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

$('.slickPrev').on('click', function(event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
    currentSlider.slick('slickPrev');
});

$('.slickNext').on('click', function(event) {
    event.preventDefault();
    
    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
    currentSlider.slick('slickNext');
});


/* Mobile nav */

const navToggle = $('.navToggle');
const nav = $('.nav');

navToggle.on('click', function(event) {
    event.preventDefault();
    nav.toggleClass('active');
});


/* Fixed header */

const header = $('#header');
const introH = $('#intro').innerHeight();
let scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on('scroll', function(){
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
    
});

function checkScroll(scrollOffset) {
    if(scrollOffset >= introH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
}


/* Smooth scroll */

$('[data-scroll]').on('click', function(event){
    event.preventDefault();

    const fixedHeight = 330;
    let blockId = $(this).data('scroll');
    let blockOffset = $(blockId).offset().top - fixedHeight;

    $('html, body').animate({
        scrollTop: blockOffset
    }, 500);
});

/* Menu nav toggle */

$('#nav-toggle').on('click',function(event){
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');

});

$('.user__avatar').on('click', function(event){
    event.preventDefault();

    $('#nav').removeClass('active');
    $('#nav-toggle').removeClass('active');
});

   









