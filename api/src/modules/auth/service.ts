import bcrypt from "bcrypt";
import UsersService from "../users/service.ts";
import ApiError from "../../core/error/apiError.ts";
import type { User, UserAuth, UserForClient } from "../users/types.ts";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.ts";
import { createToken } from "./token.ts";

const usersService = new UsersService();

class AuthService {
   async signup({ email, password }: UserAuth) {
      const passwordHash = await bcrypt.hash(password, 10);

      const user = await usersService.createUser({
         email,
         passwordHash,
      });

      if (!user) {
         throw ApiError.badRequest("Email is already registered");
      }

      const token = createToken(user.id, user.role);

      return {
         user: { ...user, passwordHash: undefined },
         access_token: token,
      };
   }

   async login({ email, password }: UserAuth) {
      const user = await usersService.getUserByEmail(email);

      if (!user) throw ApiError.unauthorized("Invalid email or password.");

      const isMatch = await bcrypt.compare(password, user.passwordHash);

      if (!isMatch) throw ApiError.unauthorized("Invalid email or password.");

      const token = createToken(user.id, user.role);

      return {
         user: { ...user, passwordHash: undefined },
         access_token: token,
      };
   }
}

export default AuthService;
