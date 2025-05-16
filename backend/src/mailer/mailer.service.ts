import { Injectable } from "@nestjs/common";
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { Queue } from "bull";
import { MailerInterface } from "./mailer.interface";
import { InjectQueue } from "@nestjs/bull";

@Injectable()
export class MailerService{
    constructor(
        @InjectQueue('mail-queue') private readonly mailQueue: Queue,
        private readonly mailerService: NestMailerService
    ){}

    async sendEmail({to, subject, text}:MailerInterface){
        await this.mailerService.sendMail({
            to,
            subject,
            text
        });
    }

    async sendToQueue(payload: MailerInterface){
        await this.mailQueue.add('send-email', payload);
    }
}