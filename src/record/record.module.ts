import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataSchema } from 'src/record/record.schema';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'record', schema: DataSchema }]),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
