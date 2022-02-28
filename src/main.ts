import Display from './components/Display';
import Control from './components/Сontrol';
import './style.css';

class Start {
  /*  control: Сontrol; */

  constructor() {
    new Display(document.body);
    new Control(document.body);
  }

  addListeners() {}
}

new Start();
