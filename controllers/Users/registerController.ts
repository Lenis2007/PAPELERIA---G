import { Request, Response } from "express";
import user from '../../Dto/userDto';
import userService from '../../Services/userServices';


let register = async (req: Request, res: Response) => {
    try {
        const {
            name,
            lastName,
            identityNumber,
            email,
            password,
            age,
            phoneNumber,
            address
        } = req.body;
        const registerUser = await userService.register(new user(name, lastName, identityNumber, email, password, age, phoneNumber, address))
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