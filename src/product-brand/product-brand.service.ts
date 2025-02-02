import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductBrand } from './schemas/productBrand.schema';
import * as mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class ProductBrandService {
    constructor(
        @InjectModel(ProductBrand.name)
        private readonly productBrandModel: mongoose.Model<ProductBrand>
    ) {}

    async findAll(query: {brand_name?: string; page?:number; limit?:number}): Promise<{data: ProductBrand[]; totalCount: number}>{
        const {brand_name, page = 1, limit = 10} = query;

        //filter by brand_name
        const filter = {is_delete: false}
        if(brand_name){
            filter['brand_name'] = {$regex: brand_name, $options: 'i'}
        }
        const totalCount = await this.productBrandModel.countDocuments(filter)
        const data = await this.productBrandModel
        .find(filter)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec()

        return {
            data,
            totalCount
        }
    }

    async create(productBrand: ProductBrand, user: User): Promise<ProductBrand>{
        const data = Object.assign(productBrand, {created_by: user._id})
        const res = await this.productBrandModel.create(data)
        return res;
    }

    async findById(id: string): Promise<ProductBrand>{
        const productBrand = await this.productBrandModel.findById(id).exec()
        if(!productBrand){
            throw new NotFoundException("Product Brand not found")
        }
        return productBrand;
    }

    async updateById(id: string, productBrand: ProductBrand): Promise<ProductBrand>{
        const updateProductBrand =  await this.productBrandModel.findByIdAndUpdate(id, productBrand, {
            new: true,
            runValidators: true
        })
        if(!updateProductBrand){
            throw new NotFoundException("Product Brand isn't defined")
        }
        return updateProductBrand;
    }

    async deleteById(id: string): Promise<{ message: string; data: ProductBrand }> {
        const updateProductBrand = await this.productBrandModel.findByIdAndUpdate(
            id,
            { is_delete: true }, 
            {
                new: true,
                runValidators: true
            }
        );
    
        if (!updateProductBrand) {
            throw new NotFoundException("Product Brand isn't defined");
        }
    
        return {
            message: "Product Brand successfully deleted",
            data: updateProductBrand
        };
    }
    
}
