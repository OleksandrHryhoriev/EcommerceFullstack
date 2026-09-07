import { type Request, type Response } from "express";
import ApiError from "../../core/error/apiError.ts";
import AuthService from "./service.ts";

const authService = new AuthService();

class AuthController {
   async signup(req: Request, res: Response) {
      const user = await authService.signup(req.body);

      res.status(201).json(user);
   }
}

export default AuthController;
