import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

/* Se autentica el usuario con los datos correspondientes */
let validatorParams = [
    check('email')
        .isLength({ max: 100 })
        .isEmail(),

    check('password')
        .isLength({ min: 8, max: 100 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
];


function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


export default {
    validatorParams,
    validator
};