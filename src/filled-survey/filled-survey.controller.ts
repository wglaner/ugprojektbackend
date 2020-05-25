import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FilledSurveyService } from './filled-survey.service';

@Controller('filled-survey')
export class FilledSurveyController {
  constructor(private readonly filledSurveyService: FilledSurveyService) {}

  @Get()
  findAll() {
    return this.filledSurveyService.findAll();
  }
  @Get(':id')
  findOne(@Param() params): string {
    return this.filledSurveyService.findOne(params.id);
  }
  @Post('findByTitle')
  findByTitle(@Body() body): string {
    return this.filledSurveyService.findByTitle(body.title);
  }
  @Post()
  create(@Body() survey) {
    return this.filledSurveyService.create(survey);
  }
  @Delete()
  deleteAll() {
    return this.filledSurveyService.deleteAll();
  }

}
