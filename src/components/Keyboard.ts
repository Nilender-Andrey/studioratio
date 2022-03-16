import Control from './Сontrol';

class Keyboard {
  constructor() {
    this.addListeners();
  }

  private handler = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        Control.moveLeft();
        break;
      case 'ArrowRight':
        Control.moveRight();
        break;
      case 'ArrowUp':
        Control.moveUp();
        break;
      case 'ArrowDown':
        Control.moveDown();
        break;
    }
  };

  private addListeners = () => {
    document.addEventListener('keydown', this.handler);
  };
}

export default Keyboard;
