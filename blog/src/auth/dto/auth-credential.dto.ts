import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    
    @IsString()
    @MinLength(6)
    @MaxLength(64)
    @Matches(/^[a-zA-Z0-9@#]*$/, {
        message: 'Only English letters and numbers, and @ and # are allowed for passwords.'
    })
    password: string;

    @IsString()
    @MinLength(10)
    @MaxLength(36)
    email: string;
}

