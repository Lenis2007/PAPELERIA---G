import category from '../Dto/categoryDto';
import categoryRepository from '../Repositories/categoryRepository';

class categoryService {

    /* Registrar categoria con la funcionalidad que se encuentra en el repositorio */
    static async register(category: category) {
        return await categoryRepository.add(category);
    }

    /* Se visualizan todos los productos ingresados con la funcionalidad que se encuentra en el repositorio */
    static async all() {
        return await categoryRepository.all();
    }

    /* Actualizar cada producto mediante la funcionalidad que se encuentra en el repositorio */
    static async update(category: category) {
        return await categoryRepository.update(category);
    }

    /* Eliminar cada categoria con la funcionalidad que se encuentra en el repositorio */
    static async delete(categoryCode: number) {
        return await categoryRepository.delete(categoryCode);
    }
}

export default categoryService;