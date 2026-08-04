import TasksModel from "../models/tasks-model.js";



export async function createTaskService(title: string, description: string, status: string, datelimited: number, userId: string) {
    try {
        const task = await TasksModel.create({
            title: title,
            description: description,
            status: status,
            datelimited: datelimited,
            userId: userId
        })
        return task;
    } catch (error) {
        throw error;
    }
}

export async function getTasksService(userId: string) {
    try {
        const getTask = await TasksModel.findAll({where: {userId: userId}})
        return getTask
    } catch (error) {
        throw error;
    }
}