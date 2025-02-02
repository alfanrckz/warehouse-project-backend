import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../../auth/schemas/user.schema";

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

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    created_by: User;
}

export const ProductBrandSchema = SchemaFactory.createForClass(ProductBrand)