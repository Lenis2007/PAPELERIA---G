import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('categoryCode')
    .isLength({ min: 2, max: 10 })
    .isAlphanumeric(),

    check('categoryName')
    .isLength({ min: 5, max: 50 }),

    check('categoryDescription')
    .isLength({ min: 10, max: 255 }),
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