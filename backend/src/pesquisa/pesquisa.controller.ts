import { Body, Controller, Get, Post } from "@nestjs/common";
import { PesquisaService } from "./pesquisa.service";

@Controller('pesquisas')
export class PesquisaController{
    constructor(private readonly pesquisaService:PesquisaService){}

    @Post()
    create(@Body() body: {title: string, userId: number}){
        return this.pesquisaService.create(body);
    }

    @Get()
    findAll(){
        return this.pesquisaService.findAll();
    }
}