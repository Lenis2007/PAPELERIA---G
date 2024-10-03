import { Request, Response } from "express";

/* Se muestra el identityNumber con el que se creo en la autenticación */
let profile = async (req: Request, res: Response) => {
    try {
        const identityNumber = req.body.identityNumber;
        const role = req.body.role;
        return res.status(200).json(
            { status: 'Get profile, OK', identityNumber: identityNumber, role: role}
        );
    } catch (error: any) {
        return res.status(500).json(
            { errorInfo: "An unknow error has occurred"}
        )
    }
}

export default profile;