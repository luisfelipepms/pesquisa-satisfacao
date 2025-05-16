import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { MailerInterface } from "./mailer.interface";
import { MailerService } from "./mailer.service";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";

@Controller('mailer')
export class MailerController{
    constructor(private readonly mailer: MailerService){}

    @UseGuards(JwtAuthGuard)
    @Post('enviar')
    async send(@Body() body: MailerInterface){
        return await this.mailer.sendEmail(
            body
        );
    }

    @Post('queue')
    async sendQueue(@Body() body: MailerInterface){
        return this.mailer.sendToQueue(body);
    }
}