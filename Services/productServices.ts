import product from '../Dto/productDto';
import productRepository from '../Repositories/productRepository';

class productService {

    /* Registrar un nuevo producto, utilizando el repositorio correspondiente de producto */
    static async register(product: product) {
        return await productRepository.add(product);
    }

    /* Buscar o mostrar los productos registrados, utilizando el repositorio correspondiente de producto */
    static async all() {
        return await productRepository.all();
    }

    /* Actualizar o editar un producto, utilizando el repositorio correspondiente de producto */
    static async update(product: product) {
        return await productRepository.update(product);
    }

    /* Eliminar un producto, utilizando el repositorio correspondiente de producto */
    static async delete(productCode: number) {
        return await productRepository.delete(productCode);
    }
}

export default productService;