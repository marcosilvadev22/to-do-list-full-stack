import { createUserService } from '../services/auth-service.js';
import { findUserByEmail, findByUser } from '../services/auth-service.js';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


interface AuthenticateRequest extends Request {
    userId?: string;
}

export async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;
        const saltRounds = 10;
        const hashSenha = await bcrypt.hash(password, saltRounds);
        const user = await createUserService(name, email, hashSenha);
        res.status(201).json({ msg: "Usuario criado com sucesso.", user: { name: name, email: email } });
    } catch (error) {
        return console.error("Erro ao criar Usuario:" + error);
    }

}

export async function loginUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: "Credenciais inválidas." });
        }
        const senhaValida = await bcrypt.compare(password, user.dataValues.password);
        if (!senhaValida) {
            return res.status(401).json({ message: "Credenciais inválidas." });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400000
        })

        return res.status(200).json({
            message: "Login bem-sucedido.", user: {
                id: user.dataValues.id,
                email: user.dataValues.email,
                name: user.dataValues.nome
            }
        });
    } catch (error) {
        return console.error("Erro ao fazer login:" + error);
    }
}


export async function checkAuth(req: AuthenticateRequest, res: Response) {
    try {
        const user = await findByUser(req.userId!);

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const { password, ...userData } = user.dataValues;
        return res.status(200).json({ user: userData });
    } catch (err) {
        console.error("Erro ao buscar usuário autenticado:", err);
        return res.status(500).json({ message: "Erro interno ao verificar autenticação" });
    }
}