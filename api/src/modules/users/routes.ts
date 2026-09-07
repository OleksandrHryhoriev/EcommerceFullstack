import { Router } from "express";
import UserController from "./controller.ts";
import {
   validateData,
   validateParams,
} from "../../core/middlewares/validationMiddleware.ts";

import {
   idParamsSchema,
   createUserSchema,
   updateUserSchema,
   partialUpdateUserSchema,
} from "./dto.ts";

const userController = new UserController();
const usersRouter = Router();

usersRouter.get("/", userController.getUsersList);
usersRouter.get(
   "/:id",
   validateParams(idParamsSchema),
   userController.getUserById,
);
usersRouter.put(
   "/:id",
   validateParams(idParamsSchema),
   validateData(updateUserSchema),
   userController.updateUser,
);
usersRouter.patch(
   "/:id",
   validateParams(idParamsSchema),
   validateData(partialUpdateUserSchema),
   userController.partialUpdateUser,
);
usersRouter.delete(
   "/:id",
   validateParams(idParamsSchema),
   userController.deleteUser,
);

export default usersRouter;
