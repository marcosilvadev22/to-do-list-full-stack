import { Router } from "express";
import { createUser, loginUser } from '../controllers/auth-controlller.js'
import verifiesAcess from "../middleware/auth-middleware.js";
import { newTask } from "../controllers/tasks-controller.js";
import { getTasks } from "../controllers/tasks-controller.js";
const authRouter = Router();

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);


authRouter.post('/createTarefa', verifiesAcess, newTask);
authRouter.get('/getTarefas', verifiesAcess, getTasks)

export default authRouter;