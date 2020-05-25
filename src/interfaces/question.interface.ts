export interface Question extends Document {
  type: string;
  contents: string;
  answer: string[];
}
