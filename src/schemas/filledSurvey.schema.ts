import * as mongoose from 'mongoose';

export const FilledSurveySchema = new mongoose.Schema({
  title: String,
  question: [{
    answer: String,
    contents: String,
  }],
});
