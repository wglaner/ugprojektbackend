import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveySchema } from '../schemas/survey.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Survey', schema: SurveySchema }])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
