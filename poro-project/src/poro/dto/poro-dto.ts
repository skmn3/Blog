import { IsNotEmpty } from "class-validator";

export class CreatePoroDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    Hashtag: string;
}