import userRepository from "../Repositories/userRepository";
import user from '../Dto/userDto';
import generateHash from "../Helpers/generateHash";
import auth from "../Dto/authDto";

class userService {

    /* Registrar un nuevo usuario, creando un hash de la contraseña y utilizando el repositorio para guardar
    los datos en la BD */
    static async register(user: user) {
        user.password = await generateHash(user.password);
        return await userRepository.add(user);
    }

    /* Autenticación de usuario utilizando el repositorio para verificar los datos con la BD */
    static async login(auth: auth) {
        return await userRepository.login(auth);
    }
}

export default userService;