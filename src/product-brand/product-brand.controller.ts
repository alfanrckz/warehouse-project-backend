import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrand } from './schemas/productBrand.schema';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';

@Controller('product-brand')
export class ProductBrandController {

    constructor(private productBrandService : ProductBrandService){}

    @Get()
    async getAllProducts(
        @Query('brand_name') brand_name?: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ): Promise<{data: ProductBrand[]; totalCount: number}>{
        return  this.productBrandService.findAll({brand_name, page, limit});
    }

    @Post()
    async createProductBrand(
        @Body() productBrand: CreateProductBrandDto
    ): Promise<ProductBrand>{
        return this.productBrandService.create(productBrand)
    }

    @Get(':id')
    async getProductById(
        @Param('id')
        id: string
    ): Promise<ProductBrand>{
        return  this.productBrandService.findById(id);
    }

    @Patch(':id')
    async updateProductBrand(
        @Param('id')
        id: string,
        @Body() productBrand: UpdateProductBrandDto
    ): Promise<ProductBrand>{
        return this.productBrandService.updateById(id, productBrand)
    }

    @Delete(':id')
    async deleteProductBrand(
        @Param('id')
        id: string
    ): Promise<{ message: string; data: ProductBrand }> {
        return this.productBrandService.deleteById(id);
    }


}


