import { API_URL, URL_CHARACTER } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_INDEX, ROOT_PAGINATION } from "../../constants/root";

import classes from './Paginate.module.css';

import Characters from "../Characters";

class Paginate {

    renderContent (data) {
        let htmlContent = '';

        for (let page = 1; page <= data.pages; page++) {
            htmlContent += `
                <li class="${classes.paginate__item} ${page === 1 ? classes.paginate__item_active : ''}">
                    ${page}
                </li>
            `
        }

        const htmlWrapper = `
            <ul class="${classes.paginate__container}">
                ${htmlContent}
            </ul>
        `

        ROOT_PAGINATION.innerHTML = htmlWrapper;
    }

    async render () {
        const data = await getDataApi.getGeneralData(API_URL + URL_CHARACTER);
        this.renderContent(data);
    }

    eventListener () {
        document.querySelectorAll(`.${classes.paginate__item}`).forEach(element => {
            element.addEventListener('click', async () => {
                const activePage = document.querySelector(`.${classes.paginate__item_active}`);
                activePage.classList.remove(classes.paginate__item_active);
                element.classList.add(classes.paginate__item_active);

                const page = element.textContent.trim();
                await Characters.render(page);
                Characters.eventListener();
            })
        })
    }
}

export default new Paginate();