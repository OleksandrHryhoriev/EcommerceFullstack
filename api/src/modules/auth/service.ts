import bcrypt from "bcrypt";
import UsersService from "../users/service.ts";
import ApiError from "../../core/error/apiError.ts";
import type { User, UserForClient } from "../users/types.ts";

const usersService = new UsersService();

class AuthService {
   async signup(newUser: {
      email: string;
      password: string;
   }): Promise<UserForClient> {
      const passwordHash = await bcrypt.hash(newUser.password, 10);

      const user = await usersService.createUser({ ...newUser, passwordHash });

      if (!user) {
         throw ApiError.badRequest("Email is already registered");
      }

      const userForClient = { ...user };
      delete (userForClient as Partial<User>).passwordHash;

      return userForClient;
   }
}

export default AuthService;
