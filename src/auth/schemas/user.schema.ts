import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})
export class User {
    @Prop({unique: [true, 'Duplicate email entered']})
    email: string

    @Prop()
    user_name: string

    @Prop()
    password: string
}
export const UserSchema = SchemaFactory.createForClass(User)