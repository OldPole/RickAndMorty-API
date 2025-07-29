import { API_URL, URL_CHARACTER } from "../../constants/api";
import { getDataApi } from "../../utils/getDataApi";
import './App.css'

class App {
    async render () {
        const data = await getDataApi.getData(API_URL + URL_CHARACTER);
        console.log(data);
    }
}

export default new App();