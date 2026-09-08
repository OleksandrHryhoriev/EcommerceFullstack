import { Router } from "express";
import AuthController from "./controller.ts";
import { validateData } from "../../core/middlewares/validationMiddleware.ts";
import { userAuthSchema } from "../users/dto.ts";
import {
   verifyRole,
   verifyToken,
} from "../../core/middlewares/authMiddleware.ts";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/signup", validateData(userAuthSchema), authController.signup);
authRouter.post("/login", validateData(userAuthSchema), authController.login);

authRouter.post(
   "/check",
   verifyToken,
   verifyRole("seller"),
   authController.check,
);
// authRouter.post("/refresh", (req, res) => {
//    res.send("refresh");
// });
// authRouter.post("/logout", (req, res) => {
//    res.send("logout");
// });
// authRouter.post("/forgot-password", (req, res) => {
//    res.send("forgot-password");
// });

export default authRouter;
