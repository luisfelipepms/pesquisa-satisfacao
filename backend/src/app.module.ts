import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { RespostaModule } from './resposta/resposta.module';
import { MailerModule } from './mailer/mailer.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    PesquisaModule, 
    RespostaModule, 
    MailerModule, 
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ConfigModule.forRoot({isGlobal: true,}),
    BullModule.forRootAsync({
      useFactory: (config: ConfigService)=>({
        redis:{
          host: config.get('REDIS_HOST'),
          port: config.get<number>('REDIS_PORT')
        }
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
