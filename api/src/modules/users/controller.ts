import { type Request, type Response } from "express";
import UsersService from "./service.ts";
import type { UserId } from "./types.ts";
import { convertInputType } from "../../core/utils/convertors.ts";

const usersService = new UsersService();

export default class UserController {
   async getUsersList(req: Request, res: Response) {
      const users = await usersService.getUsersList();
      res.json(users);
   }

   async getUserById(req: Request, res: Response) {
      const id = convertInputType<UserId>(req.params.id as string);

      const user = await usersService.getUserById(id);

      res.json(user);
   }

   async updateUser(req: Request, res: Response) {
      const id = convertInputType<UserId>(req.params.id as string);

      const updatedUser = await usersService.updateUser(req.body, id);

      res.json(updatedUser);
   }
   async partialUpdateUser(req: Request, res: Response) {
      const id = convertInputType<UserId>(req.params.id as string);

      const updatedUser = await usersService.partialUpdateUser(req.body, id);

      res.json(updatedUser);
   }
   async deleteUser(req: Request, res: Response) {
      const id = convertInputType<UserId>(req.params.id as string);

      await usersService.deleteUser(id);

      res.status(204).end();
   }
}
