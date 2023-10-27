import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class InsertPersonDTO {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  level: number;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  dateofbirth: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  degree: string;

  @IsString()
  @IsOptional()
  acedemicrank: string;

  @IsString()
  @IsOptional()
  armyrank: string;

  @IsString()
  @IsOptional()
  profilepicture: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsString()
  @IsOptional()
  languages: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  idDonVi: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  idUser: number;
}
