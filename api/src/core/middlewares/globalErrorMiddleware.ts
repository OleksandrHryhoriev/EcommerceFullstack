import type { NextFunction, Request, Response } from "express";
import ApiError from "../error/apiError.ts";

export function globalErrorMiddleware(
   err: Error,
   req: Request,
   res: Response,
   next: NextFunction,
) {
   if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
         status: err.statusCode,
         message: err.message,
         ...(err.errors && { errors: err.errors }),
      });
   }

   // Unhandeled Errors
   console.error("Unexpected error:", err);
   return res
      .status(500)
      .json({ status: 500, message: "Oops! Unexpected server error" });
}
