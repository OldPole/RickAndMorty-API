import Characters from '../Characters';

import './App.css'

class App {
    async render () {
        await Characters.render();
        Characters.eventListener();
    }
}

export default new App();