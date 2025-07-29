import Characters from '../Characters';

import './App.css'

class App {
    async render () {
        await Characters.render();
    }
}

export default new App();