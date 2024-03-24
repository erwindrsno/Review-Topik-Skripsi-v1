import { CustomError } from "../utils/CustomError.js";

export const handler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    console.log("masuk custom error");
    return res.send(error.message);
  }
  return res.status(400).send(error.message);
}