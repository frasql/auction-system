import { ValidationError } from "express-validator";
import { PersonalizedError } from "./personalized-error";


export class RequestValidationError extends PersonalizedError {
    statusCode = 400;
    constructor(public errors: ValidationError[]) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param };
        })
    }
}
