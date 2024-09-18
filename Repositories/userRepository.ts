import db from '../config/config-db';
import auth from '../Dto/authDto';
import user from '../Dto/userDto';
import bcrypt from 'bcryptjs';

class userRepository {

    /* Registrar usuarios a la base de datos, correspondiendo a los espacios que hay en la BD */
    static async add(user: user) {
        try {
            const sql = `INSERT INTO user (name, lastName, identityNumber, email, password, age, phoneNumber, address) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [user.name, user.lastName, user.identityNumber, user.email, user.password, user.age, user.phoneNumber, user.address];
            const result = await db.execute(sql, values);
            return result[0];
        } catch (error) {
            console.error('Error al registar usuario', error);
        }
    }

    /* Se autentica la información guardada en la BD mediante el email que se envía en el cliente rest, teniendo en cuenta el hash que se crea al insertar la contraseña con el 
    hash ya creado con la contraseña que se guardo en la BD */
    static async login(auth: auth) {
        const sql = `SELECT identityNumber, password from user WHERE email = ?`;
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if (isPasswordValid) {
                return {logged: true, status: "Successful authentication", identityNumber: result[0][0].identityNumber}
            }
            return {logged: false, status: "Invalid username or password"};
        }
        return {logged: false, status: "Invalid username or password"};
    }
}

export default userRepository;