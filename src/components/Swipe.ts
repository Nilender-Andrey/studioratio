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
      ? { x: e.touches[0]?.clientX, y: e.touches[0]?.clientY }
      : { x: e.clientX, y: e.clientY };
  };

  static getOffsets = (endPos: offsetsType, startPos: offsetsType) => {
    return {
      x: endPos.x - startPos.x,
      y: endPos.y - startPos.y,
    };
  };

  static getDistance = (offsets: offsetsType) => {
    return Math.sqrt(Math.pow(offsets.x, 2) + Math.pow(offsets.y, 2));
  };

  static getDirections = ({ x, y }: offsetsType) => {
    if (Math.abs(x) > Math.abs(y)) return x > 0 ? 'toRight' : 'toLeft';
    else return y < 0 ? 'toUp' : 'toDown';
  };

  down = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.didDown = true;

    this.startTime = Date.now();
    this.startPos = Swipe.position(e);
  };

  move = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    if (this.didDown) {
      this.endPos = Swipe.position(e);
    }
  };

  up = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    this.didDown = false;

    const elapsedTime = Date.now() - this.startTime;

    if (elapsedTime <= this.maxTime) {
      const offsets = Swipe.getOffsets(this.endPos, this.startPos);
      const distance = Swipe.getDistance(offsets);

      if (distance > this.minDistance && (offsets.x || offsets.y)) {
        const directions = Swipe.getDirections(offsets);
        console.log(directions);
      }
    }
  };

  addListeners() {
    this.elem.addEventListener('touchstart', this.down);
    this.elem.addEventListener('touchmove', this.move);
    document.addEventListener('touchend', this.up);

    this.elem.addEventListener('mousedown', this.down);
    this.elem.addEventListener('mousemove', this.move);
    document.addEventListener('mouseup', this.up);
  }
}

export default Swipe;
