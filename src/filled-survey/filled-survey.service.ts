import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilledSurvey } from '../interfaces/filledSurvey.interface';

@Injectable()
export class FilledSurveyService {
  constructor(@InjectModel('FilledSurvey') private readonly filledSurveyModel: Model<FilledSurvey>) {}

  async create(filledSurvey) {
    const newSurvey = new this.filledSurveyModel(filledSurvey);
    return await newSurvey.save();
  }
  findAll() {
    return this.filledSurveyModel.find();
  }

  findOne(id: any) {
    return this.filledSurveyModel.find({ _id: id });
  }

  findByTitle(title: string) {
    return this.filledSurveyModel.find({ title });
  }

  deleteAll() {
    return this.filledSurveyModel.deleteMany();
  }
}
