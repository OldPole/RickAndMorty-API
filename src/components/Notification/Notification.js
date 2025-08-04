import { ROOT_MODAL } from "../../constants/root";

import imgCloseBlack from 'url:./img/close-black.svg';

import classes from './Notification.module.css';

class Notification {
    render () {
        const htmlContent = `
            <div class="${classes.notification__container}">
                <span>Нет контента</span>
                <button 
                    class="btn bg-contain ${classes.notification__close}"
                    style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
        `

        ROOT_MODAL.innerHTML = htmlContent;
    }

    eventListener () {
        const btnClose = document.querySelector(`.${classes.notification__close}`);
        btnClose.addEventListener('click', element => {
            ROOT_MODAL.innerHTML = '';
        })
    }
}

export default new Notification();