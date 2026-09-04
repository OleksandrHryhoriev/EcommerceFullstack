import express, { type Express, json, urlencoded } from "express";
import appRouter from "./appRouter.ts";
import { errorMiddleware } from "./middlewares/errorMiddleware.ts";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware.ts";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/", appRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
