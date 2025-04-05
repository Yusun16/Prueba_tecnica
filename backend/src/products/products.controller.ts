import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { Product } from './product.entity';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Post()
    create(@Body() body: Partial<Product>) {
      return this.productsService.create(body);
    }
  
    @Get()
    findAll() {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productsService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: Partial<Product>,
    ) {
      return this.productsService.update(id, body);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.productsService.remove(id);
    }
  }
  