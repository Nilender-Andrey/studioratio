import { IGameMoves } from '../types/type';

class State {
  static isGameStop: boolean = false;
  static gameMoves: IGameMoves[] = [];
  static gameStartTime: number = Date.now();

  static gameStarts = () => {
    this.gameStartTime = Date.now();
  };

  static getGameTime = (gameEnd: number) =>
    Math.ceil((gameEnd - this.gameStartTime) / 1000);
}

export default State;
