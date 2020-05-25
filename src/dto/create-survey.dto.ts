export class CreateSurveyDto {
  title: string;
  email: string;
  question: [{
    type: string,
    contents: string
    answer: string[],
  }];
}
