import Display from './components/Display';
import Control from './components/control/Сontrol';
import './style.css';

class Start {
  constructor() {
    new Display(document.body);
    new Control(document.body);
  }
}

new Start();
