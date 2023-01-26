import {ApiProperty} from "@nestjs/swagger";
import { Order } from "../../order/base/Order";

export class SaleCreateInput {
    @ApiProperty({
        required: false,
        type: () => Number,
    })
    totalPrice?: number;
    @ApiProperty({
        required: false,
        type: () => [Order],
    })
    orders?: Order[];

}
