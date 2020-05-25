import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  type: String,
  contents: String,
  answer: [{
    option: String,
  }],
});
