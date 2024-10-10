export class ContactDTOReq{
    constructor(contacto){
        this.nombre= contacto.name
        this.apellido= contacto.last_name
        this.correo= contacto.email
    }
}

export class ContactDTORes{
    constructor(contacto){
        this.name = contacto.nombre
        this.last_name = contacto.apellido
        this.email = contacto.correo
    }
}