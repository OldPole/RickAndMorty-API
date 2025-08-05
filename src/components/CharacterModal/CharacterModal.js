import { getDataApi } from '../../utils/getDataApi';
import { ROOT_MODAL } from '../../constants/root';

import Notification from '../Notification/Notification';

import imgCloseWhite from 'url:./img/close-white.svg';

import classes from './CharacterModal.module.css'

class CharacterModal {

    renderContent (data) {
        const htmlContent = `
            <div class="${classes.wrapper}">
                <div class="${classes.character__container}">
                    <img class="img-cover ${classes.character__img}" src="${data.image}"/>
                    <div class="${classes.character__info}">
                        <span class="${classes.character__name}">${data.name}</span>
                        <span class="${classes.character__gender}">Gender: ${data.gender}</span>
                        <span class="${classes.character__species}">Species: ${data.species}</span>
                        <span class="${classes.character__status}">Status: ${data.status}</span>
                    </div>
                </div>
                <button 
                    class="btn bg-contain ${classes.character__close}"
                    style="background-image: url(${imgCloseWhite});"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlContent;
    }

    eventListener () {
        const btnClose = document.querySelector(`.${classes.character__close}`);
        btnClose.addEventListener('click', element =>{
            ROOT_MODAL.innerHTML = '';
        });
    }

    renderNotification () {
        console.log('Данных нет');
    }

    async render (uri) {
        const data = await getDataApi.getData(uri);
        
        if (data) {
            this.renderContent(data);
            this.eventListener();
        } else {
            Notification.render();
            Notification.eventListener();
        }
    }
}

export default new CharacterModal();