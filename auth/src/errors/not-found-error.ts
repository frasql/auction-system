import { PersonalizedError } from "./personalized-error";


export class NotFoudError extends PersonalizedError {
    statusCode = 404;
    constructor(){
        super()

        Object.setPrototypeOf(this, NotFoudError);
    }

    serializeErrors() {
        return [{message: 'Not found'}];
    }
}
