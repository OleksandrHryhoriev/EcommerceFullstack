import { Router } from "express";
import AuthController from "./controller.ts";
import { validateData } from "../../core/middlewares/validationMiddleware.ts";
import { createUserSchema } from "../users/dto.ts";

const authRouter = Router();
const authController = new AuthController();

authRouter.post(
   "/signup",
   validateData(createUserSchema),
   authController.signup,
);
authRouter.post("/login", (req, res) => {
   res.send("login");
});
authRouter.post("/check", (req, res) => {
   res.send("check");
});
authRouter.post("/refresh", (req, res) => {
   res.send("refresh");
});
authRouter.post("/logout", (req, res) => {
   res.send("logout");
});
authRouter.post("/forgot-password", (req, res) => {
   res.send("forgot-password");
});

export default authRouter;
