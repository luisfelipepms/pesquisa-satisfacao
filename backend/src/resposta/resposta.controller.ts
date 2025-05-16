import { Body, Controller, Param, Post, Get } from "@nestjs/common";
import { RespostaService } from "./resposta.service";

@Controller('respostas')
export class RespostaController{
    constructor(private readonly respostaService:RespostaService){}

    @Post()
    create(@Body() body: {surveyId:number, resposta:string}){
        return this.respostaService.create(body);
    }

    @Get(':surveyId')
    findBySurvey(@Param('surveyId') surveyId:string){
        return this.respostaService.findBySurvey(Number(surveyId));
    }

    @Get('surveys/:id/results')
    async getResults(@Param('id') id: string){
        return this.respostaService.getResults(Number(id));
    }
}