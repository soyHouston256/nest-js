import { ProductsService } from '../services/products/products.service';
import { CreateProductDto, UpdateProductDto } from './../dtos/productos.dtos';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(limit: number, offset: number): import("../entities/product.entity").Product[];
    getOne(productId: number): import("../entities/product.entity").Product;
    create(payload: CreateProductDto): any;
    update(id: number, payload: UpdateProductDto): import("../entities/product.entity").Product;
    delete(id: number): import("../entities/product.entity").Product;
}
