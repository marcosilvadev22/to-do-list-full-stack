import {createUserService } from '../services/auth-service.js';
import { Request, Response } from 'express';
import  bcrypt from 'bcrypt';


export async function createUser(req: Request, res: Response) {
    try {
        const {nome, email, senha} = req.body;
        const saltRounds = 10;
        const hashSenha = await bcrypt.hash(senha, saltRounds);
        const user = await createUserService(nome, email, hashSenha);
        return res.status(200).json({message: "Usuario criado com sucesso."});
    } catch (error) {
        return console.error("Erro ao criar Usuario:" + error);
    }

}