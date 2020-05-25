import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FilledSurveyModule } from './filled-survey/filled-survey.module';

@Module({
  imports: [SurveyModule, FilledSurveyModule, UserModule, MongooseModule.forRoot('mongodb+srv://Wojtek:Wojteg123@surveys-32lfg.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
