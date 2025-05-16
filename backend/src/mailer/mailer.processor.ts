import { Process, Processor } from "@nestjs/bull";
import { MailerService } from "./mailer.service";
import { Job } from "bull";
import { MailerInterface } from "./mailer.interface";

@Processor('mail-queue')
export class MailerProcessor{
    constructor(private readonly mailerService: MailerService){}

    @Process('send-email')
    async handleSendEmail(job: Job<MailerInterface>){
        const {to, subject, text} = job.data;

        await this.mailerService.sendEmail({to, subject, text});
    }
}