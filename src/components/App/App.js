import Characters from '../Characters';
import Paginate from '../Paginate';

import './App.css'

class App {
    async render () {
        await Characters.render(1);
        Characters.eventListener();
        await Paginate.render();
        Paginate.eventListener();
    }
}

export default new App();