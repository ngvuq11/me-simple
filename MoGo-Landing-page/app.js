    AOS.init();
    // slider 
    $('.owl-service').owlCarousel({
        items : 1,
        loop:true,
        nav:true,
        autoplay:true,
        center : true,
        autoplayTimeout: 5000,
        dots : false,
        navText:['<i class="fas fa-angle-left btn-left btn-slider"></i>','<i class="fas fa-angle-right btn-slider btn-right"></i>'],
        responsive:{
            0: {
                nav: false
            },
            1200:{
                nav: true
            },
            
        }
    })
    $('.owl-quote').owlCarousel({
        items : 1,
        loop:true,
        nav:true,
        autoplay:true,
        center : true,
        autoplayTimeout: 5000,
        dots : false,
        navText:['<i class="fas fa-angle-left btn-left btn-slider"></i>','<i class="fas fa-angle-right btn-slider btn-right"></i>'],
        responsive:{
            0: {
                nav: false
            },
            1200:{
                nav: true
            },
            
        }
    })
    $('.owl-about').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 6000,
        nav : false,
        dots : false,
        responsive:{
            400:{
                items:3,
            },
            600:{
                items:4,
            },
            1000:{
                items:5,
            }
        }
    })
    $('.owl-repons').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.owl-hero').owlCarousel({
        loop:true,
        nav:false,
        items : 1,
        autoplay:true,
        autoplayTimeout: 6000,
        autoplaySpeed:1000,
        dots:true,
        checkVisible : false,
    })
// service popup
const service_btns = document.querySelectorAll('.service-item-heading-right')
const service_contenets = document.querySelectorAll('.service-item')
service_btns.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        service_contenets.forEach((content,j) => {
            if(content.classList.contains('active') && j !== i) {
                content.classList.remove('active')
            }
        })
        service_contenets[i].classList.toggle('active')

    })
})
/// slider hero loanding progress
const dots = document.querySelectorAll('.owl-dot')
const sliders = document.querySelectorAll('.slider')
$('.owl-hero').on('changed.owl.carousel', function(e) {
    sliders.forEach((slider,j) => {
        if (slider.classList.contains('active')) {
            sliders[j].classList.remove('active')
        }
    })
    if(e.item.index - 2 > 0 && e.item.index - 2 < 4) {
        sliders[e.item.index - 2].classList.add('active')
    }
    else {
        sliders[0].classList.add('active')
    }
});
window.onload = function() {
    sliders[0].classList.add('active')
};
/// nav sticky
const nav = document.querySelector('.nav-wrapper')
    window.addEventListener('scroll' , () => {
        if (nav.offsetHeight + 140 < window.scrollY ) {
            nav.classList.add('active')
            navList.classList.add('sticky')
        }
        else {
            nav.classList.remove('active')
            navList.classList.remove('sticky')
        }
})
//nav mobile 
const navMobile = document.querySelector('.nav-mobile')
const navList = document.querySelector('.nav-list')
const  body = document.getElementsByTagName('body')[0]
let isMobile = false
navMobile.addEventListener('click', () => {
    navMobile.classList.toggle('active')
    navList.classList.toggle('active')
    body.classList.toggle('active')

})
window.addEventListener('click' , (e)=> {
    console.log(e.target)
    if(e.target.classList.contains('nav-mobile') == false && e.target.classList.contains('line') == false) {
        navMobile.classList.remove('active')
        navList.classList.remove('active')
        body.classList.remove('active')
    }
})