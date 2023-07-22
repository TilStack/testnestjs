import { IsString,IsEmail, IsNumberString } from "class-validator";
//import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto{
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    // @IsNumberString()
    // phone:string;

    @IsString()
    password:string
    
}

//export class UpdateUserDto extends PartialType(CreateUserDto){}

export class UpdateUserDto{
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    // @IsNumberString()
    // phone:string;

    @IsString()
    password:string
    
}