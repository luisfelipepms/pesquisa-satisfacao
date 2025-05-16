import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  imports:[
    UsersModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions: {expiresIn: '1d'},
    }),
  ],
})
export class AuthModule {}
