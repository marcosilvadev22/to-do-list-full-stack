import {createUserService } from '../services/auth-service.js';
import {findUserByEmail } from '../services/auth-service.js';
import { Request, Response } from 'express';
import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


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

export async function loginUser(req: Request, res: Response) {
    try {
        const {email, senha} = req.body;
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({message: "Credenciais inválidas."});
        }
        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) {
            return res.status(401).json({message: "Credenciais inválidas."});
        }

        const token = jwt.sign( 
            {id: user.id}, process.env.JWT_SECRET as string, {expiresIn: '1h'} 
        );
        return res.status(200).json({message: "Login bem-sucedido.", token});
    } catch (error) {
        return console.error("Erro ao fazer login:" + error);
    }
}