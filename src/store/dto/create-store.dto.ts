import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength,IsArray} from "class-validator";

export class CreateStoreDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    marketsegment: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    street: string;

    @IsNotEmpty()
    customersegment:string;

    @IsNumber()
    @IsNotEmpty()
    phonenumber:number;
    
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];


}