import { ValidationError } from "express-validator";
import { PersonalizedError } from "./personalized-error";

export class DatabaseConnectionError extends PersonalizedError {
    reason = 'Error connecting to database';
    statusCode = 500;
    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)

    }

    serializeErrors() {
        return [
            {message: this.reason}
        ]
    }
}
