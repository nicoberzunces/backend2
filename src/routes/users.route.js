import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
import CustomRouter from "./customRouter.js"

export default class UserRouterCustom extends CustomRouter {
    init(){
        /*
        this.post('/login', ['PUBLIC'], login);
        this.post('/register', ['PUBLIC'], register);
        */

        this.get('/profile', ['USER', 'ADMIN'], async (req, res) => {
            try {
                const user = await UserModel.findById(req.user.id).lean();
                if (!user) {
                    return res.notFound();
                }
                res.success(user);
            } catch (e) {
                res.errorServer(e.message);
            }
        });
        

       
    }
}
