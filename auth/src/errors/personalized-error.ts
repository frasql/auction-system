export abstract class PersonalizedError extends Error {
    abstract statusCode: number;

    constructor() {
        super();

        Object.setPrototypeOf(this, PersonalizedError.prototype);

    }

    abstract serializeErrors(): {message: string, field?: string}[]
}