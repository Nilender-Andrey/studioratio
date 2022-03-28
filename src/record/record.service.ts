import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecordDocument, Record } from 'src/record/record.schema';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordService {
  constructor(
    @InjectModel('record') private recordModel: Model<RecordDocument>,
  ) {}

  async getRecord2048Game(): Promise<Record[]> {
    return await this.recordModel.find({ isEndless: false });
  }

  async getRecordEndlessGame(): Promise<Record[]> {
    return await this.recordModel.find({ isEndless: true });
  }

  async postRecord(createRecordDto: CreateRecordDto): Promise<Record> {
    const { startTime, endTime } = createRecordDto;
    const record = new this.recordModel({
      ...createRecordDto,
      time: Math.ceil((endTime - startTime) / 1000),
    });

    return record.save();
  }
}
