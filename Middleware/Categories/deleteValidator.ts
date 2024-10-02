import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

/* Validación para eliminar una categoria mediante el codigo, utilizandolo como parametro de ruta */
let validatorParams = [
    param('categoryCode')
        .isInt({ min: 1 })
        .withMessage('El ID debe ser un número entero positivo.'),

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