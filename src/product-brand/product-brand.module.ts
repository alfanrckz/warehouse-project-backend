import { Module } from '@nestjs/common';
import { ProductBrandController } from './product-brand.controller';
import { ProductBrandService } from './product-brand.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductBrandSchema } from './schemas/productBrand.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'ProductBrand', schema: ProductBrandSchema }])
  ],
  controllers: [ProductBrandController],
  providers: [ProductBrandService]
})
export class ProductBrandModule {}
