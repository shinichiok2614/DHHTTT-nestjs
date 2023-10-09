import { IsNotEmpty, IsString } from "class-validator";

export class InsertDonViDTO{
    @IsString()
    @IsNotEmpty()
    name: string
}