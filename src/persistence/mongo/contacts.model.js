import { model, Schema } from "mongoose"

const contactCollection = 'contacts'

const contactSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
})

export const ContactModel = model(contactCollection, contactSchema) 