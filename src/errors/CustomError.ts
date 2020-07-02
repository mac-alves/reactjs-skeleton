export class CustomError extends Error {
    constructor(path: string, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = path;
    }
}