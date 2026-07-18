import User from '../models/usuario-model.js';

export async function createUserService(nome: string, email: string, senha: string) {
    try {
        const user = await User.create({
            nome: nome,
            email: email,
            senha: senha
        })
        return user;
    } catch (error) {
        throw error;
    }
}

export async function findUserByEmail(email: string) {
    try {
        const user = await User.findOne({ where: { email: email } });
        return user;
    } catch (error) {
        throw error;
    }
}