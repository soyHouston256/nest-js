export declare class CreateBrandDto {
    readonly name: string;
    readonly description: string;
}
declare const UpdateBrandDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBrandDto>>;
export declare class UpdateBrandDto extends UpdateBrandDto_base {
}
export {};
