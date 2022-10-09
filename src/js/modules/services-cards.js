import { popupOpen } from "./popup.js";

export function servicesCard(className) {
    const btnCards = className.querySelectorAll('.services__btn');
    btnCards.forEach(btnCard => {
        btnCard.addEventListener('click', () => {
            let popupInfo = ''
            popupOpen(popupInfo, btnCard.dataset.services);
        });
    });
}