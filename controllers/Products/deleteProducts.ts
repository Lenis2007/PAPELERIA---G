import { Request, Response } from "express";
import productService from "../../Services/productServices";

/* Se elimina un producto mediante el codigo como parametro de ruta */
let deleteProducts = async (req: Request, res: Response) => {
    try {
        const { productCode } = req.params

        const deleteProduct: any = await productService.delete(Number(productCode));

        if (deleteProduct > 0) {
            return res.status(200).json({ status: 'Producto eliminado.'})
        } else {
            return res.status(404).json({ status: 'Producto no encontrado.'})
        }
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default deleteProducts;