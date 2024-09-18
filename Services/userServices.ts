import userRepository from "../Repositories/userRepository";
import user from '../Dto/userDto';
import generateHash from "../Helpers/generateHash";
import auth from "../Dto/authDto";

class userService {

    static async register(user: user) {
        user.password = await generateHash(user.password);
        return await userRepository.add(user);
    }

    static async login(auth: auth) {
        return await userRepository.login(auth);
    }
}

export default userService;