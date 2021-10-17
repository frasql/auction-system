import { Request, Response, NextFunction } from "express"
import { PersonalizedError } from "../errors/personalized-error";

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (err instanceof PersonalizedError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    return res.status(404).send({
        errors: [{message: 'Unhandle Error'}]
});
};