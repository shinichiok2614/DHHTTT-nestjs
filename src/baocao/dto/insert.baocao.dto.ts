import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class InsertBaoCaoDTO{
    @IsNotEmpty()
    name: string
    
    @IsNotEmpty()
    @Type(() => Number)
    idNhiemVu: number
    
    @IsNotEmpty()
    @Type(() => Number)
    idDonVi:number
}