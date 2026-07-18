import { Express } from "express";
import { Router } from "express";
import { createUser, loginUser } from '../controllers/auth-controlller.js'
import verifiesAcess from "../middleware/auth-middleware.js";

const authRouter = Router();

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser)

authRouter.get('/', verifiesAcess, (req, res) => {
    res.send('Hello from express and ts');
})

export default authRouter;