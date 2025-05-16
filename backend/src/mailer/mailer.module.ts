import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { forwardRef, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailerController } from './mailer.controller';
import { BullModule } from '@nestjs/bull';
import { MailerProcessor } from './mailer.processor';

@Module({
    imports:[
        ConfigModule,
        BullModule.registerQueue({
            name: 'mail-queue'
        }),
        NestMailerModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:async (config: ConfigService)=>({
                transport:{
                    host: config.get('MAIL_HOST'),
                    port: config.get('MAIL_PORT'),
                    secure: false,
                    auth:{
                        user: config.get('MAIL_USER'),
                        pass: config.get('MAIL_PASS')
                    },
                },
                defaults:{
                    from: `"No Reply" <lfpms_lins@hotmail.com>`,
                },
                // template:{
                //     dir: join(__dirname, 'templates'),
                //     adapter: null,
                //     options:{
                //         strict: true,
                //     },
                // },
            }),
            inject: [ConfigService]
        })
    ],
    providers:[MailerService, MailerProcessor],
    exports:[MailerService],
    controllers:[MailerController]
})
export class MailerModule {}
