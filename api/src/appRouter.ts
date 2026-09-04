import { Router } from "express";
import productsRouter from "./products/routes.ts";

const appRouter = Router();

appRouter.get("/", (req, res) => {
   res.send("Hello from App");
});

appRouter.use("/products", productsRouter);

export default appRouter;
