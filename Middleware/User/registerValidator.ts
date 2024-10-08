import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

/* Validación de datos ingresados para registrar un nuevo usuario */
let validatorParams = [
    check('name')
        .isLength({ min: 3, max: 50 }),

    check('lastName')
        .isLength({ min: 3, max: 50 }),

    check('identityNumber')
        .isLength({ min: 9, max: 1000 })
        .isInt(),

    check('email')
        .isEmail(),

    check('password')
        .isLength({ min: 8 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&]{8,}$/),

    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            return { msg: 'Las contraseñas no coinciden' };
        }
        return true
    }),

    check('age')
        .isInt({ min: 18, max: 100 }),

    check('phoneNumber')
        .isLength({ min: 10, max: 10 }),

    check('address')
        .isLength({ min: 10, max: 100 }),

    check('role')
        .isLength({ min: 4, max: 5 })
        .withMessage('El rol debe ser "user" o "admin".')
        .isIn(['user', 'admin'])
        .withMessage('El rol debe ser "user" (cliente o usuario) o "admin" (administrador).'),

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