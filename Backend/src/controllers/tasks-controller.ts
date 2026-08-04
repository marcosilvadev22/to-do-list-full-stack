import { Request, Response } from "express";
import { createTaskService } from '../services/task-service.js';

export async function newTask(req: Request, res: Response) {

    try {
        const { title, description, status, userId } = req.body;
        const task = await createTaskService(title, description, status, userId);
        res.status(201).json({ msg: "Tarefa criada com sucesso.", task: { title: title, description: description, status: status, userId: userId } });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao criar tarefa." });
    }


}