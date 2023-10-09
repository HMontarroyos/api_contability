import { Response } from "express";
import { ApiError } from "./ApiError";

export const validateError = (error: unknown, res: Response) => {
  if (error instanceof ApiError) {
    console.error("ERROR", error.stack);
    res.status(error.statusCode).send(error.message);
  } else {
    res.status(500).send("Internal Server Error");
  }
};
