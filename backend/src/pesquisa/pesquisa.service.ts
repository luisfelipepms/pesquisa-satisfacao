import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PesquisaService{
    constructor(private prisma: PrismaService){}

    async create(data: {title: string, userId: number}){
        return this.prisma.survey.create({data});
    }

    async findAll(){
        return this.prisma.survey.findMany({include: {user:true}});
    }
}