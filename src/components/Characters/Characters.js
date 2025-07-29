import { API_URL, URL_CHARACTER } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX } from "../../constants/root";

import './Characters.css'

class Charecters {

    async render () {
        const data = await getDataApi.getData(API_URL + URL_CHARACTER);

        let htmlContent = '';

        data.forEach(({ id, name, image }) => {
            htmlContent += `
                <li class="characters__item">
                    <span class="characters__name">${name}</span>
                    <img class="characters__img" src=${image}></img>
                </li>
            `;
        });

        const htmlWrapper = `
            <ul class="characters__container">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Charecters();