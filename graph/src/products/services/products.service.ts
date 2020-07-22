import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './../../models/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async create(name: string) {
    const newProduct = new Product();
    newProduct.name = name;
    const product = await this.productsRepository.save(newProduct);
    return product;
  }

}
