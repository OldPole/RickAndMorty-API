import { API_URL, URL_CHARACTER } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../constants/root";

import classes from './Characters.module.css';

import CharacterModal from "../CharacterModal/CharacterModal";
import Error from "../Error";

class Charecters {
    renderCharacters (data) {
        let htmlContent = '';

        data.forEach(({ id, name, image }) => {
            const uri = API_URL + URL_CHARACTER + '/' + id;

            htmlContent += `
                <li class="characters__item ${classes.characters__item}" data-uri="${uri}">
                    <span class="${classes.characters__name}">${name}</span>
                    <img class="img-contain ${classes.characters__img}" src=${image}></img>
                </li>
            `;
        });

        const htmlWrapper = `
            <ul class="${classes.characters__container}">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render (page) {
        const data = await getDataApi.getData(API_URL + URL_CHARACTER + '?page=' + page);

        data ? this.renderCharacters(data) : Error.render();
    }

    eventListener () {
        document.querySelectorAll('.characters__item').forEach(element => {
            const uri = element.getAttribute('data-uri');
            element.addEventListener('click', () => {
                CharacterModal.render(uri);
            })
        });
    }
}

export default new Charecters();