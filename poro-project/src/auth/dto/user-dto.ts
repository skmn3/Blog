import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(64)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'English and numbers are allowed for passwords.'
    })
    password: string;

    @IsString()
    @MinLength(10)
    @MaxLength(64)
    email: string;
}