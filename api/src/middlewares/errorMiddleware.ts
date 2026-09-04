import type { NextFunction, Request, Response } from "express";
import ApiError from "../error/apiError.ts";

export function errorMiddleware(
   err: Error,
   req: Request,
   res: Response,
   next: NextFunction,
) {
   if (err instanceof ApiError) {
      return res
         .status(err.status)
         .json({ status: err.status, message: err.message });
   }

   // Unhandeled Errors
   console.error("Unexpected error:", err);
   return res
      .status(500)
      .json({ status: 500, message: "Oops! Unexpected server error" });
}
