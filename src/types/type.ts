export interface IRatingData {
  name: string;
  isWin: boolean;
  steps: number;
  score: number;
  time: number;
  isEndless: boolean;
  difficulty: number;
}

export interface IRenderResult {
  isWin: boolean;
  score: number;
  steps: number;
}

export type RenderResultType = ({ isWin, score, steps }: IRenderResult) => void;

export type DirectionType = 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown';

export type MoveType = (direction: DirectionType) => void;

export interface IGameMoves {
  result: number;
  moves: number;
  field: number[][];
}

export interface IRecord {
  name: string;
  isWin: boolean;
  steps: number;
  score: number;
  startTime: number;
  endTime: number;
  isEndless: boolean;
  difficulty: number;
}
