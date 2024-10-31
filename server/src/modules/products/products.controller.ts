import { Controller, Get, Param } from '@nestjs/common';
import products, { Product } from 'src/products';

@Controller('products')
export class ProductsController {
  constructor() { }

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }
  @Get(":id")
  async show(@Param('id') id: string): Promise<Product> {
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product;
  }

}
