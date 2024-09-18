import product from '../Dto/productDto';
import productRepository from '../Repositories/productRepository';

class productService {

    static async register(product: product) {
        return await productRepository.add(product);
    }

    static async all() {
        return await productRepository.all();
    }

    static async update(product: product) {
        return await productRepository.update(product);
    }

    static async delete(productCode: number) {
        return await productRepository.delete(productCode);
    }
}

export default productService;