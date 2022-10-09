import { sendForm } from "./send-form.js";
export function submitForm(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        sendForm(form);
    });
}