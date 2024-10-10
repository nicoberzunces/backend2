import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export const connectionDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_STRING ,{ dbName: process.env.USE_DB });
        console.log('BBDD conectada')
    } catch (e) {
        console.log('Error al conectarse a la bbdd');
    }
}