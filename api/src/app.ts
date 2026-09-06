import express, { type Express, json, urlencoded } from "express";
import appRouter from "./appRouter.ts";
import { globalErrorMiddleware } from "./core/middlewares/globalErrorMiddleware.ts";
import { notFoundMiddleware } from "./core/middlewares/notFoundMiddleware.ts";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/", appRouter);

app.use(notFoundMiddleware);
app.use(globalErrorMiddleware);

export default app;
