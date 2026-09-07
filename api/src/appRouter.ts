import { Router } from "express";
import productsRouter from "./modules/products/routes.ts";
import authRouter from "./modules/auth/routes.ts";

const appRouter = Router();

appRouter.get("/", (req, res) => {
   res.send("Hello from App");
});

appRouter.use("/products", productsRouter);
appRouter.use("/auth", authRouter);

export default appRouter;
