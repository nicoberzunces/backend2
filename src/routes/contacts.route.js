import CustomRouter from "./customRouter.js"
import { ContactDTOReq, ContactDTORes } from "../DTO/contact.dto.js";
import { ContactServices } from "../repository/index.js";

export default class ContactRouter extends CustomRouter {
    init(){
        this.get('/',['PUBLIC'],async (req, res)=>{
            const data = await ContactServices.get()
            res.json({message: 'Todo bien', payload: data.map(contacto => new ContactDTORes(contacto))})
        });

        this.get('/:id',['PUBLIC'],async (req, res)=>{
            const { id } = req.params
            const data = await ContactServices.getById(id)
            res.json({message: 'Todo bien', payload: data})
        }) 

        this.delete('/:id',['PUBLIC'],async (req, res)=>{
            const { id } = req.params
            await ContactServices.deleteById(id)
            res.json({message: 'Contacto eliminado'})
        })

        this.post('/',['PUBLIC'], async (req, res)=>{
            const { name, last_name, email } = req.body
            const data = await ContactServices.create(new ContactDTOReq({ name, last_name, email }))
            res.json({message: 'Contacto creado', payload: data.map(contacto => new ContactDTORes(contacto)) })
        })

        this.put('/:id',['PUBLIC'], async (req, res)=>{
            const { nombre, apellido, correo } = req.body
            const { id } = req.params
            const data = await ContactServices.update(id,{ nombre, apellido, correo })
            res.json({ message: 'Contacto Modificado', payload: data })
        })

    }
}