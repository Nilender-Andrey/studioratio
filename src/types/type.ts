export interface IRatingData {
  name: string;
  isWin: boolean;
  steps: number;
  score: number;
  time: number;
}

export interface IRenderResult {
  isWin: boolean;
  score: number;
  steps: number;
}

export type RenderResultType = ({ isWin, score, steps }: IRenderResult) => void;

export type DirectionType = 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown';

export type MoveType = (direction: DirectionType) => void;
