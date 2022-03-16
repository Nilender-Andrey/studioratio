import Control from './Сontrol';

type optionsType = {
  minDistance?: number;
  maxTime?: number;
  corners?: boolean;
};

type offsetsType = {
  x: number;
  y: number;
};

class Swipe {
  elem: HTMLElement;
  minDistance: number;
  maxTime: number;
  startTime: number = 0;
  didDown: boolean = false;
  startPos: offsetsType = { x: 0, y: 0 };
  endPos: offsetsType = { x: 0, y: 0 };

  constructor(elem: HTMLElement, options: optionsType) {
    this.elem = elem;
    this.minDistance = options.minDistance || 100;
    this.maxTime = options.maxTime || 500;

    this.addListeners();
  }

  static position = (e: MouseEvent | TouchEvent) => {
    return 'touches' in e
      ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
      : { x: e.clientX, y: e.clientY };
  };

  static getOffsets = (endPos: offsetsType, startPos: offsetsType) => {
    return {
      x: endPos.x - startPos.x,
      y: endPos.y - startPos.y,
    };
  };

  static getDistance = (offsets: offsetsType) =>
    Math.sqrt(Math.pow(offsets.x, 2) + Math.pow(offsets.y, 2));

  static getDirections = ({ x, y }: offsetsType) => {
    if (Math.abs(x) > Math.abs(y)) return x > 0 ? 'moveRight' : 'moveLeft';
    else return y < 0 ? 'moveUp' : 'moveDown';
  };

  private down = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();

    this.startTime = Date.now();
    this.startPos = this.endPos = Swipe.position(e);
  };

  private up = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();

    const elapsedTime = Date.now() - this.startTime;

    this.endPos = Swipe.position(e);

    if (elapsedTime <= this.maxTime) {
      const offsets = Swipe.getOffsets(this.endPos, this.startPos);
      const distance = Swipe.getDistance(offsets);

      if (distance > this.minDistance) {
        const directions = Swipe.getDirections(offsets);
        Control[directions]();
      }
    }
    this.startPos = { x: 0, y: 0 };
    this.endPos = { x: 0, y: 0 };
  };

  private addListeners = () => {
    this.elem.addEventListener('touchstart', this.down);
    document.addEventListener('touchend', this.up);

    this.elem.addEventListener('mousedown', this.down);
    document.addEventListener('mouseup', this.up);
  };
}

export default Swipe;
