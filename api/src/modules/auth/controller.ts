import { type Request, type Response } from "express";
import AuthService from "./service.ts";

const authService = new AuthService();

class AuthController {
   async signup(req: Request, res: Response) {
      const user = await authService.signup(req.body);

      res.status(201).json(user);
   }

   async login(req: Request, res: Response) {
      const user = await authService.login(req.body);

      res.json(user);
   }

   async check(req: Request, res: Response) {
      res.send("checked");
   }
}

export default AuthController;
