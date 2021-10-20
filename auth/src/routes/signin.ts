import express, { Request, Response }  from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { Password } from "../services/password";
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/api/users/signin', 
    [
        body('email')
            .isEmail()
            .withMessage("Email must be valid"),
        body('password')
            .trim()
            .notEmpty()
            .withMessage("A password is missing")
    ],
    validateRequest, 
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            throw new BadRequestError("User not found");
        }

        const passwordMatch = await Password.verify(
            existingUser.password, 
            password
        );

        if (!passwordMatch) {
            throw new BadRequestError("Invalid Credentials");
        } 

        if (!process.env.JWT_KEY) {
            throw new BadRequestError("No jwt environment");
        }

        const userJWT = jwt.sign({
            "id": existingUser.id,
            "email": existingUser.email
        }, process.env.JWT_KEY);

        req.session = {
            jwt: userJWT 
        };

        res.status(201).send({ existingUser });
});

export {router as SignInRouter};