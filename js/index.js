$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    touchDrag:true,
    dots:true,
    autoplay:true,
    smartSpeed:700,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
});


const navigation = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.scrollY >= 100) {
        navigation.classList.add('navigation-bar-show');
    } else {
        navigation.classList.remove('navigation-bar-show');
    }

});