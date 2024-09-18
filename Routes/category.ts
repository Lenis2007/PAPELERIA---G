import express from "express";
import getAllCategories from "../controllers/Categories/getAllCategories";
import registerCategories from "../controllers/Categories/registerCategories";
import registerValidator from "../Middleware/Categories/registerValidator";
import updateCategories from "../controllers/Categories/updateCategories";
import updateValidator from "../Middleware/Categories/updateValidator";
import deleteCategories from "../controllers/Categories/deleteCategories";
import deleteValidator from "../Middleware/Categories/deleteValidator";

const router = express.Router();

/* Visualizar todas las categorias registradas */
router.get('/all', getAllCategories);

/* Registrar categorias */
router.post('/register', registerValidator.validatorParams, registerValidator.validator, registerCategories);

/* Actualizar o editar una categoria mediante el código */
router.put('/:categoryCode', updateValidator.validatorParams, updateValidator.validator, updateCategories);

/* Eliminar la categoria mediante el código */
router.delete('/:categoryCode', deleteValidator.validatorParams, deleteValidator.validator, deleteCategories);

export default router;