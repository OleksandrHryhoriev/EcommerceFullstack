import type { NextFunction, Request, Response } from "express";
import { decodeToken } from "../../modules/auth/token.ts";
import ApiError from "../error/apiError.ts";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
   const token = req.headers.authorization?.split(" ")[1];

   if (!token) throw ApiError.unauthorized("Unauthorized. No token");

   const decoded = decodeToken(token);
   if (typeof decoded !== "object" || !decoded.userId)
      throw ApiError.unauthorized("Unauthorized. Wrong token");

   req.userRole = decoded.role;
   next();
}

export function verifyRole(role: string) {
   return (req: Request, res: Response, next: NextFunction) => {
      if (req.userRole !== role) throw ApiError.forbidden("Access denied");

      next();
   };
}
