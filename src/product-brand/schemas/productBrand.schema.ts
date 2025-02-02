import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class ProductBrand {
    @Prop({required: true})
    brand_name: string
    @Prop({required: true})
    brand_code: string
    @Prop({required: true})
    price: number
    @Prop({required: true})
    description: string
    @Prop({required: true})
    uom: string
    @Prop({default: false})
    is_delete: boolean
}

export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand)