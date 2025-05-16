import { Module } from '@nestjs/common';
import { RespostaController } from './resposta.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RespostaService } from './resposta.service';

@Module({
    controllers:[RespostaController],
    providers:[PrismaService, RespostaService]
})
export class RespostaModule {}
