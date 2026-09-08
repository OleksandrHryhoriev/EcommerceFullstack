import jwt from "jsonwebtoken";
import { env } from "../../config/env.ts";
import ApiError from "../../core/error/apiError.ts";

const EXPIRES_IN = "30d";

export function createToken(userId: number, role: string) {
   return jwt.sign({ userId, role }, env.JWT_SECRET, { expiresIn: EXPIRES_IN });
}

export function decodeToken(token: string) {
   try {
      const decoded = jwt.verify(token, env.JWT_SECRET);
      return decoded;
   } catch (error) {
      throw ApiError.unauthorized("Unauthorized. Bad token");
   }
}
