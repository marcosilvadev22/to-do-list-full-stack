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