import { Request, Response } from "express";
import category from "../../Dto/categoryDto";
import categoryService from "../../Services/categoryServices";


let updateCategory = async (req: Request, res: Response) => {
    try {
        const {
            categoryName,
            categoryDescription
        } = req.body;
        const {categoryCode} = req.params
        const updateCategory = await categoryService.update (new category(Number(categoryCode), categoryName, categoryDescription))
        return res.status(201).json(
            { status: 'Categoria actualizada!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default updateCategory;