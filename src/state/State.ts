import { IRatingData } from '../types/type';
import { v4 as uuidv4 } from 'uuid';

class State {
  static isGameStop: boolean = false;
  static idGame: string | null = null;
  static gameStartTime: number = Date.now();
  static ratingStandard: IRatingData[] = [
    { name: 'test_4', isWin: false, steps: 20, score: 20, time: 10 },
    { name: 'test_3', isWin: true, steps: 30, score: 20, time: 20 },
    { name: 'test_2', isWin: false, steps: 20, score: 20, time: 30 },
    { name: 'test_1', isWin: true, steps: 30, score: 20, time: 40 },
  ];

  static ratingEndless: IRatingData[] = [
    { name: 'test_4', isWin: false, steps: 20, score: 20, time: 10 },
    { name: 'test_3', isWin: true, steps: 30, score: 20, time: 20 },
    { name: 'test_2', isWin: false, steps: 20, score: 20, time: 30 },
    { name: 'test_1', isWin: true, steps: 30, score: 20, time: 40 },
  ];

  static gameStarts = () => {
    this.idGame = uuidv4();
    this.gameStartTime = Date.now();
  };

  static getGameTime = () =>
    Math.ceil((Date.now() - this.gameStartTime) / 1000);
}

export default State;
