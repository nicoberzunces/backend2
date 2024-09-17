import { model, Schema } from "mongoose";

const cartCollection = 'carts';

const cartSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
}, { timestamps: true });

export const CartModel = model(cartCollection, cartSchema);
