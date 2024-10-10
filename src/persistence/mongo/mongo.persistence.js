import { ContactModel } from "./contacts.model.js"


export class ContactDao {
    constructor(){
        
    }

    async get(){
        console.log('Respondiendo desde mongo persistence')
        return await ContactModel.find()
    }

    async getById(id){
        console.log('Respondiendo desde mongo persistence')
        return await ContactModel.findOne({id})
    }

    async deleteById(id){
        await ContactModel.findByIdAndDelete(id)
    }

    async create(contacto){
        return await ContactModel.create(contacto).lean()
    }

    async update(id, contactoActualizado){
       return await ContactModel.findByIdAndUpdate(id, { ...contactoActualizado },{ new: true })
    }
}