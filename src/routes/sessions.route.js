// routes/sessions.route.js
import { Router } from "express";
import passport from 'passport';
import { login, register, logout } from "../controllers/user.controller.js";

const router = Router();

// Rutas de autenticación
router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);

// Ruta para obtener el usuario actual
router.get('/current', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        res.status(200).json({ status: 'success', user: req.user });
    }
);

export default router;
