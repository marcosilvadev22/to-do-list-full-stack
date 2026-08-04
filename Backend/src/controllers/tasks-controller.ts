import { Request, Response } from "express";
import { createTaskService } from '../services/task-service.js';
import { getTasksService } from "../services/task-service.js";

interface AuthenticateRequest extends Request {
    userId?: string;
}

export async function newTask(req: AuthenticateRequest, res: Response) {

    try {
        const { title, description, status, datelimited } = req.body;
        const userId = req.userId;
        console.log(req.userId);
        const task = await createTaskService(title, description, status, datelimited, userId!);
        res.status(201).json({ msg: "Tarefa criada com sucesso.", task: { title: title, description: description, status: status, userId: userId } });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao criar tarefa.", error });
    }


}

export async function getTasks(req: AuthenticateRequest, res: Response) {
    try {
        const userId = req.userId
        const getTasks = await getTasksService(userId!);
        if (!getTasks) {
            return res.status(404).json({ msg: "Estudo não encontrado." })
        }
        return res.status(200).json({ data: getTasks });
    } catch (error) {
        return res.status(400).json({ mgs: "não foi possivel pega os estudos." })
    }
}