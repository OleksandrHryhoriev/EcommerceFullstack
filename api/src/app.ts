import express, { type Express, json, urlencoded } from "express";
import appRouter from "./appRouter.ts";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/", appRouter);

export default app;
