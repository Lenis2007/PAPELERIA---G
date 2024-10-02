import { Request, Response } from "express";
import categoryService from "../../Services/categoryServices";

/* Visualizar todas las categorias creadas mediante el repositorio correspondiente */
let getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.all(); 
    return res.status(200).json(
      {
        categories
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default getAllCategories;