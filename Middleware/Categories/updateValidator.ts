import { check, param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    param('categoryCode')
    .isInt(),

    check('categoryName')
    .isLength({ min: 10, max: 50 }),

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