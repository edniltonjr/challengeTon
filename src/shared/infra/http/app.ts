import "reflect-metadata";
import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";
import swaggerUI from "swagger-ui-express";

import swaggerFile from "../../../../swagger.json";

import "../../container";
import { AppError } from "../../errors/AppError";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
