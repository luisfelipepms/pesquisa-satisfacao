import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RespostaService{
    constructor(private prisma:PrismaService){}

    async create(data:{surveyId: number; resposta: string}){
        return this.prisma.answer.create({data})
    }

    async findBySurvey(surveyId:number){
        return this.prisma.answer.findMany({
            where: {surveyId}
        })
    }

    async getResults(id: number){
        return this.prisma.answer.groupBy({
            by: ['resposta'],
            where: {surveyId: id},
            _count: true
        });
    }
}