import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
    data: { identityNumber: string },
    exp: number,
    iat: number
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header('Authorization');

    if (!authorization) {
        return res.status(403).json({ status: "The authorization header is required" });
    }

    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ status: 'You have not sent a token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;
        req.body.identityNumber = decoded.data.identityNumber;
        next();
    } catch (error) {
        return res.status(403).json({ status: 'Unauthorized' });
    }
}

export default verifyToken;
