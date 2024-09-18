import express from "express";
import registerController from '../controllers/Users/registerController';
import registerValidator from '../Middleware/User/registerValidator';
import authController from "../controllers/Users/authController";
import authValidator from "../Middleware/User/authValidator";
import profile from '../controllers/Users/profileController';
import verifyToken from '../Middleware/verifyToken';
const router = express.Router();

/* Registrar usuario */
router.post('/register', registerValidator.validatorParams, registerValidator.validator, registerController);

/* Autenticar o Logear al usuario ya registrado */
router.post('/auth', authValidator.validatorParams, authValidator.validator, authController);

/* Autenticar el token: De tal manera que el token devuelva la data correspondiente */
router.get('/profile', verifyToken, profile);

export default router;