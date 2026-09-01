import express, { type Express, json, urlencoded } from "express";
import productsRouter from "./products/routes.js";
import appRouter from "./appRouter.js";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/", appRouter);
app.use("/products", productsRouter);

export default app;
