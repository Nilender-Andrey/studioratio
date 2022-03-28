import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class Record {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  isWin: boolean;
  @Prop({ required: true })
  steps: number;
  @Prop({ required: true })
  score: number;
  @Prop({ required: true })
  time: number;
  @Prop({ required: true })
  isEndless: boolean;
  @Prop({ required: true })
  difficulty: number;
}

export const DataSchema = SchemaFactory.createForClass(Record);
