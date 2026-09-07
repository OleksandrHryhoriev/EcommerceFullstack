import type {
   CreateUser,
   UpdateUser,
   UserId,
   PartialUpdateUser,
} from "./types.ts";
import UsersDataAccess from "./dataAccess.ts";
import ApiError from "../../core/error/apiError.ts";

const usersDataAccess = new UsersDataAccess();

class UsersService {
   async getUsersList() {
      const users = await usersDataAccess.getUsersList();

      return users;
   }
   async getUserById(id: UserId) {
      const user = await usersDataAccess.getUserById(id);

      if (!user) throw ApiError.notFound("User not found");

      return user;
   }
   async createUser(newUser: CreateUser) {
      const user = await usersDataAccess.createUser(newUser);

      return user;
   }
   async updateUser(UserData: UpdateUser, id: UserId) {
      const user = await usersDataAccess.updateUser(UserData, id);

      if (!user) throw ApiError.notFound("User not found");

      return user;
   }
   async partialUpdateUser(UserData: PartialUpdateUser, id: UserId) {
      const user = await usersDataAccess.partielUpdateUser(UserData, id);

      if (!user) throw ApiError.notFound("User not found");

      return user;
   }
   async deleteUser(id: UserId) {
      const user = await usersDataAccess.deleteUser(id);

      if (!user) throw ApiError.notFound("User not found");

      return user;
   }
}

export default UsersService;
