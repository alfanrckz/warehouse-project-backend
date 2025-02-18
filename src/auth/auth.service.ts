import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt  from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signUp(signUpDto: SignUpDto){
        const {email, user_name, password} = signUpDto
        const handlePassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            email,
            user_name,
            password: handlePassword
        })
        const token = this.jwtService.sign({id: user._id})
        return {token}
    }

    async login(loginDto: LoginDto): Promise<{token: string}>{
        const {user_name, password} = loginDto;
        const user = await this.userModel.findOne({user_name})
        if(!user){
            throw new UnauthorizedException('Invalid user name or password')
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(!isPasswordMatched){
            throw new UnauthorizedException("Invalid user name or password")
        }
        const token = this.jwtService.sign({id: user._id})
        return {token}
    }

}
