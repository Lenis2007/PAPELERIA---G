import db from '../config/config-db';
import category from '../Dto/categoryDto';
import { ResultSetHeader } from 'mysql2';

class categoryRepository {
    
    /* Insertar o registrar datos con los campos correspondientes de la BD */
    static async add(category: category) {
        try {
            const sql = `INSERT INTO category (categoryCode, categoryName, categoryDescription)
            VALUES (?, ?, ?)`;
            const values = [category.categoryCode, category.categoryName, category.categoryDescription];
            const result = await db.execute(sql, values);
            return result[0];
        } catch (error) {
            console.error('Error al registrar la categoria.', error);
        }
    }

    /* Permite visualizar las categorias registradas */
    static async all() {
        try {
            const sql = `SELECT * FROM category`;
            const rows = await db.execute(sql);
            return rows[0];
        } catch (error) {
            console.error('Error al encontrar la categoria.');
        }
    }

    /* Permite actualizar todos los datos mediante el código de la categoria existente */
    static async update(category: category) {
        try {
            const sql = `UPDATE category SET categoryName = ?, categoryDescription = ? WHERE categoryCode = ?`;
            const values = [category.categoryName, category.categoryDescription, category.categoryCode];
            const [result] = await db.execute<ResultSetHeader>(sql, values);
            return result;
        } catch (error) {
            console.error('Error al actualizar la categoria.', error);
        }
    }

    /* Permite eliminar la información de toda una categoria mediante el código existente */
    static async delete(categoryCode: number) {
        try {
            const sql = `DELETE FROM category WHERE categoryCode = ?`;
            const result = await db.execute<ResultSetHeader>(sql, [categoryCode]);
            return result[0].affectedRows;
        } catch (error) {
            console.error('Error al eliminar la categoria', error);
        }
    }
}

export default categoryRepository;