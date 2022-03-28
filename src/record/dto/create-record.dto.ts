export class CreateRecordDto {
  readonly name: string;
  readonly isWin: boolean;
  readonly steps: number;
  readonly score: number;
  readonly startTime: number;
  readonly endTime: number;
  readonly isEndless: boolean;
  readonly difficulty: number;
}
