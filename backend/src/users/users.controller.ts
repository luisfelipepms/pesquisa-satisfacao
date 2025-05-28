import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() dto: CreateUserDto){
        return this.usersService.create(dto);
    }

    @Get()
    findAll(){
        return this.usersService.findAll();
    }
}
