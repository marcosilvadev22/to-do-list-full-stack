import { Express } from "express";
import { Router } from "express";
import { createUser, loginUser } from '../controllers/auth-controlller.js'
import verifiesAcess from "../middleware/auth-middleware.js";
import { newTask } from "../controllers/tasks-controller.js";

const authRouter = Router();

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);
authRouter.post('/tarefas', newTask); 

authRouter.get('/', verifiesAcess, (req, res) => {
    res.send('Hello from express and ts');
})

export default authRouter;