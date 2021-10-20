import { PersonalizedError } from "./personalized-error";


export class NotAuthError extends PersonalizedError {
    statusCode = 401;

    constructor(){
        super();
        
        Object.setPrototypeOf(this, NotAuthError.prototype);
    }
    serializeErrors() {
        return [{message: 'Not authorized'}];
    }
}