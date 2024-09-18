import category from '../Dto/categoryDto';
import categoryRepository from '../Repositories/categoryRepository';

class categoryService {

    static async register(category: category) {
        return await categoryRepository.add(category);
    }

    static async all() {
        return await categoryRepository.all();
    }

    static async update(category: category) {
        return await categoryRepository.update(category);
    }

    static async delete(categoryCode: number) {
        return await categoryRepository.delete(categoryCode);
    }
}

export default categoryService;