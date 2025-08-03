import { getDataApi } from '../../utils/getDataApi';
import { ROOT_MODAL } from '../../constants/root';

import classes from './Character.module.css';

class CharacterModal {

    renderContent (data) {
        console.log(classes);
        const htmlContent = `
            <div class="${classes.character__container}">
                <img class="${classes.character__img}" src="${data.image}"/>
                <div>
                    <span class="${classes.character__name}">${data.name}</span>
                    <span class="${classes.character__gender}">${data.gender}</span>
                    <span class="${classes.character__species}">${data.species}</span>
                    <span class="${classes.character__status}">${data.status}</span>
                </div>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlContent;
    }

    renderNotification () {
        console.log('Данных нет');
    }

    async render (uri) {
        const data = await getDataApi.getData(uri);
        
        data ? this.renderContent(data) : this.renderNotification();
    }
}

export default new CharacterModal();