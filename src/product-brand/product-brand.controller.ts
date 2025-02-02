import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrand } from './schemas/productBrand.schema';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product-brand')
export class ProductBrandController {

    constructor(private productBrandService : ProductBrandService){}

    @Get()
    @UseGuards(AuthGuard())
    async getAllProducts(
        @Query('brand_name') brand_name?: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ): Promise<{data: ProductBrand[]; totalCount: number}>{
        return  this.productBrandService.findAll({brand_name, page, limit});
    }

    @Post()
    @UseGuards(AuthGuard())
    async createProductBrand(
        @Body() productBrand: CreateProductBrandDto,
        @Req() req,
    ): Promise<ProductBrand>{
        return this.productBrandService.create(productBrand, req.user)
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async getProductById(
        @Param('id')
        id: string
    ): Promise<ProductBrand>{
        return  this.productBrandService.findById(id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard())
    async updateProductBrand(
        @Param('id')
        id: string,
        @Body() productBrand: UpdateProductBrandDto
    ): Promise<ProductBrand>{
        return this.productBrandService.updateById(id, productBrand)
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteProductBrand(
        @Param('id')
        id: string
    ): Promise<{ message: string; data: ProductBrand }> {
        return this.productBrandService.deleteById(id);
    }


}


