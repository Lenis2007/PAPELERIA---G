import express from "express";
import getAllProducts from "../controllers/Products/getAllProducts";
import registerProducts from "../controllers/Products/registerProducts";
import registerValidator from "../Middleware/Products/registerValidator";
import updateProducts from "../controllers/Products/updateProducts";
import updateValidator from "../Middleware/Products/updateValidator";
import deleteProducts from "../controllers/Products/deleteProducts";
import deleteValidator from "../Middleware/Products/deleteValidator";

const router = express.Router();

/* Visualizar los productos ya registrados */
router.get('/all', getAllProducts);

/* Registrar productos */
router.post('/register', registerValidator.validatorParams, registerValidator.validator, registerProducts);

/* Actualizar o editar un producto registrado mediante su código */
router.put('/:productCode', updateValidator.validatorParams, updateValidator.validator, updateProducts);

/* Eliminar un producto mediante su código */
router.delete('/:productCode', deleteValidator.validatorParams, deleteValidator.validator, deleteProducts);

export default router;