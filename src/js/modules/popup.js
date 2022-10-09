export function popupOpen(popupInfo, optinoInput) {
    // /* скрипт для popup */
    const body = document.querySelector('body');
    const popup = document.querySelector('.popup');

    const success = popup.querySelector('.popup__success');
    const error = popup.querySelector('.popup__error');
    const form = popup.querySelector('.popup__form');


    if (popupInfo === 'success') {
        success.classList.remove('hidden');
        error.classList.add('hidden');
        form.classList.add('hidden');
    } else if (popupInfo === 'error') {
        success.classList.add('hidden');
        error.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        success.classList.add('hidden');
        error.classList.add('hidden');
        form.classList.remove('hidden');
    }

    const input = popup.querySelector('.feedback__input--hidden');
    if (
        optinoInput !== undefined &&
        optinoInput !== '' &&
        optinoInput !== null
    ) {
        input.value = optinoInput;
    }

    let popupClose; // выносим определение на первый уровень, иначе нэти переменные не относятся к нашейц области видимости
    let popupContent;

    // scroll
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowWidth = parseInt(window.innerWidth);
    const scrollbarWidth = windowWidth - documentWidth;

    const closePopupHandler = () => {
        popup.classList.remove('active');
        body.classList.remove('popup-open');
        body.style.removeProperty('margin-right');
        popupClose.removeEventListener('click', closePopupHandler); // при закрытии окна снимаем слушатель кнопки - он нам больше не нужен
        window.removeEventListener('keydown', escapeHandler); // при закрытии окна снимаем слушатель Эскейпа
        popupContent.removeEventListener('click', overlayClickHandler); // призакрытии окна снимаем слушатель клика по вуали
    };

    function escapeHandler(e) {
        // закрытие окна по кнопке escape
        if (e.key === 'Escape') {
            closePopupHandler();
        }
    }

    function overlayClickHandler(e) {
        // закрытие окна при клике на паранжу
        if (e.target === popupContent) {
            closePopupHandler();
        }
    }

    const openPopupHandler = () => {
        // e.preventDefault();
        popup.classList.add('active');
        body.classList.add('popup-open');
        body.style.marginRight = `${scrollbarWidth}px`;
        if (!popupInfo) {
              dataLayer.push({'event':'popupOpen'});
        }

        popupClose = popup.querySelector('.popup__close'); // Задаем значение переменных в зависимости от того, какой попап открываем
        popupContent = popup.querySelector('.popup__content');
        popupClose.addEventListener('click', closePopupHandler); // слушаем клавишу Энтер по кнопке закрытия
        popupContent.addEventListener('click', overlayClickHandler); // слушаем клик по паранже
        window.addEventListener('keydown', escapeHandler); // слушаем клавишу Эскейп
    };

    openPopupHandler();
}