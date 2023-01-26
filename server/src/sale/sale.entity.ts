import {Order} from "../order/base/Order";
import {ApiProperty} from "@nestjs/swagger";

export class Sale {
    @ApiProperty({
        required: false,
        type: () => Number,
    })
    id?: number;

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

    @ApiProperty({
        required: false,
        type: () => Date,
    })
    createdAt?: Date;

    @ApiProperty({
        required: false,
        type: () => Date,
    })
    updatedAt?: Date;
}
