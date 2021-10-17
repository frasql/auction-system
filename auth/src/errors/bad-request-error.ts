import { PersonalizedError } from "./personalized-error";

export class BadRequestError extends PersonalizedError {
    statusCode = 400;

    constructor(public message: string) {
        super();

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }

}