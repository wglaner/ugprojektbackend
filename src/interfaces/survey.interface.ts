import { QuestionSchema } from '../schemas/question.schema';
import { Question } from './question.interface';

export interface Survey extends Document {
  id: string;
  name: string;
  owner: {
    email: string,
    first_name: string,
    last_name: string,
  };
  question: Question[];
}
