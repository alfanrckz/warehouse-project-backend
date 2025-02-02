import { IsEmail, IsNotEmpty, IsString, MinLength } from "@nestjs/class-validator"

export class SignUpDto{
    @IsNotEmpty()
    @IsEmail({}, {message: "Please Enter correct Email"})
    readonly email: string
    
    @IsNotEmpty()
    @IsString()
    readonly user_name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string


}