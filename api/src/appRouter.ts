import { Router } from "express";

const appRouter = Router();

appRouter.get("/", (req, res) => {
   res.send("Hello from App");
});

export default appRouter;
