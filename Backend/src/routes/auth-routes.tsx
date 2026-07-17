import { Express } from "express";
import { Router } from "express";
import { createUser } from '../controllers/auth-controlller.js'

const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.send('Hello from express and ts');
})

authRouter.post('/register', createUser)

export default authRouter;