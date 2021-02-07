class HttpError extends Error {
    constructor(status, message) {
        super(status);

        this.name = this.constructor.name;
        this.status = status;
        this.message = message || this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = HttpError;
