import express from "express";
import productsRouter from "./products/routes.js";
import appRouter from "./appRouter.js";

const app = express();

app.use("/", appRouter);
app.use("/products", productsRouter);

export default app;
