import { Request, Response } from "express";
import Product from "../../Dto/productDto";
import productService from "../../Services/productServices";

/* Datos que se deben ingresar para registrar a un nuevo producto, teniendo en cuenta el DTO creado y utilizando
el servicio de esté */
let registerProduct = async (req: Request, res: Response) => {
    try {
        const {
            productCode,
            productName,
            productDescription,
            productCategory,
            productPrice,
            productQuantity
        } = req.body;
        const registerProducts = await productService.register(new Product(productCode, productName, productDescription, productCategory, productPrice, productQuantity))
        return res.status(201).json(
            { status: 'Producto registrado!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default registerProduct;