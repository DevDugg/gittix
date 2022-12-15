import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Bcs extending
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
