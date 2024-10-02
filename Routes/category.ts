import express from "express";
import getAllCategories from "../controllers/Categories/getAllCategories";
import registerCategories from "../controllers/Categories/registerCategories";
import registerValidator from "../Middleware/Categories/registerValidator";
import updateCategories from "../controllers/Categories/updateCategories";
import updateValidator from "../Middleware/Categories/updateValidator";
import deleteCategories from "../controllers/Categories/deleteCategories";
import deleteValidator from "../Middleware/Categories/deleteValidator";
import verifyToken from "../Middleware/verifyToken";

const router = express.Router();

/* Visualizar todas las categorias registradas */
router.get('/all', getAllCategories);

/* Registrar categorias */
router.post('/register', verifyToken, registerValidator.validatorParams, registerValidator.validator, registerCategories);

/* Actualizar o editar una categoria mediante el código */
router.put('/:categoryCode', verifyToken, updateValidator.validatorParams, updateValidator.validator, updateCategories);

/* Eliminar la categoria mediante el código */
router.delete('/:categoryCode', verifyToken ,deleteValidator.validatorParams, deleteValidator.validator, deleteCategories);

export default router;