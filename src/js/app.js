import {menu} from './modules/menu-nav.js';
import { posterTop, cardSlider, gallerySlider, subscriptionSlider, swiperInit } from './modules/sliders.js';
import {tabsFn} from './modules/tabs.js';
import {YandexMaps} from './modules/map.js';
import {submitForm} from './modules/submit-form.js';
import {phoneMask} from './modules/phone-mask.js';
import { popupOpen } from './modules/popup.js';
import { servicesCard } from './modules/services-cards.js';
import { scrollTopShow } from './modules/scroll-top.js';
import { blockFixed } from './modules/header-fixed.js';


// scroll-top
swiperInit()
try {
    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        scrollTopShow(scrollBtn);
    }
} catch (error) {
    console.log(error);
}

// меню
try {
    const header = document.querySelector('.header');
    if (header) {
        menu(header);
        blockFixed(header);
    }
} catch (error) {
    console.log(error);
}

// слайдер постера
try {
    const poster = document.querySelector('.poster');
    if (poster) {
        posterTop();
    }
} catch (error) {
    console.log(error);
}

// слайдер карточек
try {
    const services = document.querySelector('.services');
    if (services && document.documentElement.clientWidth <= 768) {
        cardSlider();
    }

    if (services) {
        
        servicesCard(services);
    }
} catch (error) {
    console.log(error);
}

// табы цены
try {
    const price = document.querySelector('.price');
    if (price) {
        tabsFn(price);
    }
} catch (error) {
    console.log(error);
}

// слайдер абониментов
try {
    const subscription = document.querySelector('.subscription');
    if (subscription) {
        subscriptionSlider();
    }
} catch (error) {
    console.log(error);
}

// слайдер галереи
try {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        gallerySlider();
    }
} catch (error) {
    console.log(error);
}

// карта
try {
    const mapContainer = document.querySelector('.map__сard');
    if (mapContainer) {
        const obj = {
            containerId: 'map', // контейнер, куда загружается карта
            coords: '', // список адресов, которые выводим на карты
            // url: URL, // адрес апи
            center: [59.96159235739861, 30.455920533188685], // центр карты
            zoom: 17, // величина зума
            find: false, // возможность открытия бабла по клику вне карты
            coordsMarker: [59.961682467504104, 30.455201701172687]
        };
        const mapInit = new YandexMaps(obj);
    }
} catch (error) {
    console.log(error);
}

// отправка данных с форм
try {
    const forms = document.querySelectorAll('.feedback__form');
    if (forms.length > 0) {
        forms.forEach(form => {
            phoneMask(form);
            submitForm(form);
        });
    }
} catch (error) {
    console.log(error);
}

//popup open
try {
    const openPopups = document.querySelectorAll('.popup__open');
    if (openPopups) {
        openPopups.forEach(openPopup => {
            openPopup.addEventListener('click', () => {
                popupOpen()
            })
        })
    }
} catch (error) {
    console.log(error);
}


