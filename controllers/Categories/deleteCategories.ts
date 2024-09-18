import { Request, Response } from "express";
import categorieService from '../../Services/categoryServices';


let deleteCategories = async (req: Request, res: Response) => {
    try {
        const { categoryCode } = req.params

        const deleteCategory: any = await categorieService.delete(Number(categoryCode));

        if (deleteCategory > 0) {
            return res.status(200).json({ status: 'Categoria eliminada!' })
        } else {
            return res.status(404).json({ status: 'Categoria no encontrada!' })
        }
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}

export default deleteCategories;