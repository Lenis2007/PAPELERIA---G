import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('productCode')
    .isLength({ min: 2, max: 10 })
    .isAlphanumeric(),

    check('productName')
    .isLength({ min: 3, max: 50 }),

    check('productDescription')
    .isLength({ min: 10, max: 255 }),

    check('productCategory')
    .isLength({ min: 1, max: 50 }),

    check('productPrice')
    .isNumeric()
    .isInt({ min: 1 }),

    check('productQuantity')
    .isInt({ min: 1 }),
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