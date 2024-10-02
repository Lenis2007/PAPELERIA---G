import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

/* Validación para visualizar todos los productos */
let validatorParams = [
    check('role')
        .isIn(['admin'])
        .withMessage('El usuario debe de ser administrador.')
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