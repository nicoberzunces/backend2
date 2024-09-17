import { UserModel } from "../models/user.model.js";
import { createHash, generadorToken, isValidPassword } from "../utils.js";

export const login = async (req, res) => {
    try {
        const { password, email } = req.body; 

        const userFound = await UserModel.findOne({ email }).lean();

        if (!userFound) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        if (isValidPassword(userFound, password)) {            
            const tokenPayload = { id: userFound._id, email: userFound.email, role: userFound.role };
            const token = generadorToken(tokenPayload);
            res.cookie('currentUser', token, { httpOnly: true, signed: true, maxAge: 3600000 }); // 1 hora
            return res.success({ token });
        }

        return res.status(400).json({ message: 'Contraseña inválida' });
    } catch (e) {
        return res.status(500).json({ message: 'Error en el servidor', error: e.message });
    }
}

export const register = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password, cart } = req.body;
        const userFound = await UserModel.findOne({ email });
        if (userFound) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const newUser = {
            first_name,
            last_name,
            email,
            age,
            cart,
            password: createHash(password)
        }

        const user = await UserModel.create(newUser);
        return res.status(201).json({ message: 'Usuario creado exitosamente', user });
    } catch (e) {
        return res.status(500).json({ message: 'Error en el servidor', error: e.message });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('currentUser');
        return res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    } catch (e) {
        return res.status(500).json({ message: 'Error al cerrar sesión', error: e.message });
    }
}
