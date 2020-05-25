import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from '../dto/create-survey.dto';
import { Survey } from '../interfaces/survey.interface';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  findAll() {
    return this.surveyService.findAll();
  }
  @Get(':id')
  findOne(@Param() params): string {
    return this.surveyService.findOne(params.id);
  }
  @Get('findByEmail/:email')
  findByEmail(@Param() params): string {
    return this.surveyService.findByEmail(params.email);
  }
  @Post()
  create(@Body() survey: CreateSurveyDto) {
    return this.surveyService.create(survey);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.surveyService.deleteById(params.id);
  }
  @Delete('')
  deleteAll() {
    return this.surveyService.deleteAll();
  }
}
