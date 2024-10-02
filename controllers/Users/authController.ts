import { Request, Response } from "express";
import Auth from '../../Dto/authDto';
import userService from "../../Services/userServices";
import GenerateToken from "../../Helpers/generateToken";
import dotenv from "dotenv";
dotenv.config();

/* Se autentica el usuario, mediante el envio de los datos de email y password, generando un token para el
identityNumber */
let auth = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const login = await userService.login(new Auth(email, password));
        if (login.logged) {
            return res.status(200).json({
                status: login.status,
                token: GenerateToken({identityNumber: login.identityNumber}, process.env.KEY_TOKEN, 60)
            });
        }
        return res.status(401).json({
            status: login.status
        });
    } catch (error) {
        console.log(error);
    }
}

export default auth;