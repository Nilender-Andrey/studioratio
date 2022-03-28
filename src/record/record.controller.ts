import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecordService } from './record.service';
import { Record } from 'src/record/record.schema';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller('/api/v1/record/')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Get()
  getRecord2048Game(): Promise<Record[]> {
    return this.recordService.getRecord2048Game();
  }

  @Get('endless')
  getRecordEndlessGame(): Promise<Record[]> {
    return this.recordService.getRecordEndlessGame();
  }

  @Post()
  postRecord(@Body() recordDto: CreateRecordDto): Promise<Record> {
    return this.recordService.postRecord(recordDto);
  }
}
