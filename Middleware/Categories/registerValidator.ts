import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

/* Validación de datos para registrar una categoria */
let validatorParams = [
    check('categoryCode')
        .isLength({ min: 1, max: 10 })
        .isAlphanumeric(),

    check('categoryName')
        .isLength({ min: 5, max: 50 }),

    check('categoryDescription')
        .isLength({ min: 10, max: 255 }),

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