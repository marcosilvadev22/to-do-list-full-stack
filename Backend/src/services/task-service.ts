import TasksModel from "../models/tasks-model.js";

export async function createTaskService(title: string, description: string, status: string, userId: string) {
    try {
        const task = await TasksModel.create({
            title: title,
            description: description,
            status: status,
            userId: userId
        })
        return task;
    } catch (error) {
        throw error;
    }
}
