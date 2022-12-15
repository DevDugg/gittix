// Types
import { Request, Response, NextFunction } from "express";
// Errors
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("validation error wow");
  }
  if (err instanceof DatabaseConnectionError) {
    console.log("db connection error wow");
  }
  res.status(400).send({
    message: err.message,
  });
};
