import express, {Request, Response}  from "express";
import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/required-auth";

const router = express.Router();

router.post('/api/users/currentuser', currentUser, requireAuth, (req: Request, res: Response) => {
    
    res.send({ currentUser: req.currentUser || null});
});

export {router as currentUserRouter};