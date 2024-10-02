import { Request, Response } from "express";
import user from '../../Dto/userDto';
import userService from '../../Services/userServices';


let register = async (req: Request, res: Response) => {
    try {
        const {
            /* Datos que se deben ingresar para registrar a un nuevo usuario, teniendo en cuenta el DTO creado y utilizando
            el servicio de esté */
            name,
            lastName,
            identityNumber,
            email,
            password,
            age,
            phoneNumber,
            address,
            role
        } = req.body;
        const registerUser = await userService.register(new user(name, lastName, identityNumber, email, password, age, phoneNumber, address, role))
        return res.status(201).json(
            { status: 'Usuario registrado!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default register;