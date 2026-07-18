import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";


interface AuthenticateRequest extends Request {
    userId?: string;
}

export default function verifiesAcess(req: AuthenticateRequest, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({ message: "Denied access, missing token." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(404).json({ msg: "Invalido ou token expirado." })
    }

}
