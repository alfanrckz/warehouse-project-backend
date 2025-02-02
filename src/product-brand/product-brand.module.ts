import { Module } from '@nestjs/common';
import { ProductBrandController } from './product-brand.controller';
import { ProductBrandService } from './product-brand.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductBrandSchema } from './schemas/productBrand.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ProductBrand', schema: ProductBrandSchema }])],
  controllers: [ProductBrandController],
  providers: [ProductBrandService]
})
export class ProductBrandModule {}
