import { Request, Response } from "express";

let profile = async (req: Request, res: Response) => {
    try {
        const identityNumber = req.body.identityNumber;
        return res.status(200).json(
            { status: 'Get profile, OK', identityNumber: identityNumber}
        );
    } catch (error: any) {
        return res.status(500).json(
            { errorInfo: "An unknow error has occurred"}
        )
    }
}

export default profile;