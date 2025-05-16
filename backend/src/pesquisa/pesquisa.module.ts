import { Module } from '@nestjs/common';
import { PesquisaController } from './pesquisa.controller';
import { PesquisaService } from './pesquisa.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers:[PesquisaController],
    providers:[PesquisaService, PrismaService]
})
export class PesquisaModule {}
