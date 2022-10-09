import Swiper, {Navigation, Pagination, Autoplay, EffectCards} from 'swiper';

export function posterTop() {
    var swiper = new Swiper('.poster__slider', {
        modules: [Navigation, Autoplay, Pagination],
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

export function swiperInit() {
    function enableSwiper() {
        if (window.matchMedia('(max-width: 768px').matches) {
            if (document.querySelector('.epilation__slider')) {
                document.querySelector('.epilation__slider').classList.add('swiper');
                document.querySelector('.epilation__slider').classList.add('swiper-container');
                document.querySelector('.epilation__grid').classList.add('swiper-wrapper');
                document.querySelectorAll('.epilation__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                });
            };
        };
    }
    enableSwiper()
    var epilationSwiper = new Swiper('.epilation__slider', {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
    })
}

export function cardSlider() {
    const swiper = new Swiper('.services-slider', {
        modules: [EffectCards],
        effect: 'cards',
        grabCursor: true,
        rewind: true
    });
}

export function subscriptionSlider() {
    const swiper = new Swiper('.subscription__slider', {
        modules: [Navigation, Autoplay],
        grabCursor: true,
        speed: 1000,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

export function gallerySlider() {
    const swiper = new Swiper('.gallery__slider', {
        slidesPerView: 1,
        modules: [Navigation],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 10,
        grabCursor: true,
        breakpoints: {
            390: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            460: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            940: {
                slidesPerView: 3.5,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
}