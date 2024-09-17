import { model, Schema } from "mongoose";

const userCollection = 'users';

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
}, { timestamps: true });

export const UserModel = model(userCollection, userSchema);
