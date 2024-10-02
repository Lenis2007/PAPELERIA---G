import { Request, Response } from "express";
import Product from "../../Dto/productDto";
import productService from "../../Services/productServices";

/* Campos o datos que se pueden cambiar en el producto, teniendo en cuenta que el codigo se utilizará como parametro
de ruta, utilizandola para encontrar el producto que se desea editar. */
let updateProduct = async (req: Request, res: Response) => {
    try {
        const {      
            productName,
            productDescription,
            productCategory,
            productPrice,
            productQuantity
        } = req.body;
        const {productCode} = req.params
        const updateProducts = await productService.update(new Product(Number(productCode), productName, productDescription, productCategory, productPrice, productQuantity))
        return res.status(201).json(
            { status: 'Producto actualizado!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default updateProduct;