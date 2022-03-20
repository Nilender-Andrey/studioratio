import { MoveType } from '../../types/type';

class Keyboard {
  move: MoveType;
  constructor(move: MoveType) {
    this.addListeners();
    this.move = move;
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
    this.move(direction);
  };

  private addListeners = () => {
    document.addEventListener('keydown', this.handler);
  };
}

export default Keyboard;
