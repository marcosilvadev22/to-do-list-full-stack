import User from '../models/usuario-model.js';

export async function createUserService(name: string, email: string, password: string) {
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
        return user;
    } catch (error) {
        throw error;
    }
}

export async function findUserByEmail(email: string) {
    try {
        const user = await User.findOne({ where: { email } });
        return user;
    } catch (error) {
        throw error;
    }
}