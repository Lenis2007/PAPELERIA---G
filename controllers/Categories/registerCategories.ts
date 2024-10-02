import { Request, Response } from "express";
import Category from "../../Dto/categoryDto";
import categoryService from "../../Services/categoryServices"

/* Datos que se deben ingresar para registrar a un nueva categoria, teniendo en cuenta el DTO creado y utilizando
el servicio de esté */
let registerCategory = async (req: Request, res: Response) => {
    try {
        const {
            categoryCode,
            categoryName,
            categoryDescription
        } = req.body;
        const registerCategory = await categoryService.register(new Category(categoryCode, categoryName, categoryDescription))
        return res.status(201).json(
            { status: 'Categoria registrada!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}

export default registerCategory;