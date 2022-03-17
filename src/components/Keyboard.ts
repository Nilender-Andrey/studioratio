import Control from './Сontrol';

class Keyboard {
  constructor() {
    this.addListeners();
  }

  private handler = (e: KeyboardEvent) => {
    let direction: 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown' =
      'moveLeft';
    switch (e.code) {
      case 'ArrowLeft':
        direction = 'moveLeft';
        break;
      case 'ArrowRight':
        direction = 'moveRight';
        break;
      case 'ArrowUp':
        direction = 'moveUp';
        break;
      case 'ArrowDown':
        direction = 'moveDown';
        break;
    }
    Control.move(direction);
  };

  private addListeners = () => {
    document.addEventListener('keydown', this.handler);
  };
}

export default Keyboard;
