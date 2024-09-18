import db from '../config/config-db';
import product from '../Dto/productDto';
import { ResultSetHeader } from 'mysql2';

class productRepository {

    /* Insertar o registar productos correspondiendo a los espacios que hay en la tabla product de la BD */
    static async add(product: product) {
        try {
            const sql = `INSERT INTO product (productCode, productName, productDescription, productCategory, productPrice, productQuantity)
            VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [product.productCode, product.productName, product.productDescription, product.productCategory, product.productPrice, product.productQuantity];
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error al registrar el producto.', error);
        }
    }

    /* Permite visualizar los productos registrados */
    static async all() {
        try {
            const sql = `SELECT * FROM product`;
            const [rows] = await db.execute(sql);
            return rows;
        } catch (error) {
            console.error('Error al encontrar el producto.');
        }
    }

    /* Permite actualizar todos los datos mediante el código del producto existente */
    static async update(product: product) {
        try {
            const sql = `UPDATE product SET productName = ?, productDescription = ?, productCategory = ?, productPrice = ?, productQuantity = ? WHERE productCode = ?`;
            const values = [product.productName, product.productDescription, product.productCategory, product.productPrice, product.productQuantity, product.productCode];
            const [result] = await db.execute<ResultSetHeader>(sql, values);
            return result;
        } catch (error) {
            console.error('Error al actualizar el producto.', error);
        }
    }

    /* Permite eliminar la información de todo un producto mediante el código existente */
    static async delete(productCode: number) {
        try {
            const sql = `DELETE FROM product WHERE productCode = ?`;
            const [result] = await db.execute<ResultSetHeader>(sql, [productCode]);
            // Para saber cuantas columnas se eliminaron
            return result.affectedRows;
        } catch (error) {
            console.error('Error al eliminar la categoria', error);
        }
    }
}

export default productRepository;