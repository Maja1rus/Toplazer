import { popupOpen } from "./popup.js";
import { sendData } from "./send-data.js";

export const sendForm = form => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const formList = JSON.stringify(data);
    let popupInfo;
    sendData('/mail.php', formList)
        .then(() => {
            form.reset();
            popupInfo = 'success';
            dataLayer.push({'event':'success'});
            popupOpen(popupInfo);            
        })
        .catch(err => {
            console.log(err);
            popupInfo = 'error';
            popupOpen(popupInfo)
        });
};
