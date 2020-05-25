import { Question } from './question.interface';

export interface FilledSurvey extends Document {
  title: string;
  question: [{
    contents: string,
    answer: string,
  }];
}
