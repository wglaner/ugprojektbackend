import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilledSurveySchema } from '../schemas/filledSurvey.schema';
import { FilledSurveyController } from './filled-survey.controller';
import { FilledSurveyService } from './filled-survey.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FilledSurvey', schema: FilledSurveySchema }])],
  controllers: [FilledSurveyController],
  providers: [FilledSurveyService],
})
export class FilledSurveyModule {}
