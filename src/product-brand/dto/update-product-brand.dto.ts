import { User } from "../../auth/schemas/user.schema"

export class UpdateProductBrandDto{
    readonly brand_name: string
    readonly brand_code: string
    readonly price: number
    readonly description: string
    readonly uom: string
    readonly is_delete: boolean
    readonly created_by: User

}