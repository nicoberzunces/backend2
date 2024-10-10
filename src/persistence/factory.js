import { ContactDao as ContactMongo } from "./mongo/mongo.persistence.js";
import { ContactDao as ContactMemory } from "./memory/contacts.memory.js";
import { connectionDB } from "./mongo/connection.js";


let ContactDao = null;
// let ProductDao = null;

const persistence = process.argv[2];
console.log(persistence);
switch(persistence){
    case '--mongo':
        connectionDB();
        ContactDao = new ContactMongo();
        // ProductDao = new ProductMondo();
        break;
    case '--memory':
        ContactDao = new ContactMemory();
        break;
    // case '--fs':
    //     ContactDao = new ContactFS();
    //     break;
    default: 
        ContactDao = new ContactMemory();
        break;
}

export default {
    ContactDao
}