import { Injectable } from '@nestjs/common';
import { Survey } from '../interfaces/survey.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSurveyDto } from '../dto/create-survey.dto';

@Injectable()
export class SurveyService {

  constructor(@InjectModel('Survey') private readonly surveyModel: Model<Survey>) {}

  async create(survey: CreateSurveyDto) {
    const newSurvey = new this.surveyModel(survey);
    return await newSurvey.save();
  }
  findAll() {
    return this.surveyModel.find();
  }

  findOne(id: any) {
    return this.surveyModel.find({ _id: id });
  }

  findByEmail(email: any) {
    return this.surveyModel.find({ email });
  }

  deleteById(id: string) {
    return this.surveyModel.findByIdAndRemove(id);
  }

  deleteAll() {
    return this.surveyModel.deleteMany();
  }
}
