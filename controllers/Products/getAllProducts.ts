import { Request, Response } from "express";
import productService from "../../Services/productServices";


let getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.all();
    return res.status(200).json(
      {
        products
      }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default getAllProducts;