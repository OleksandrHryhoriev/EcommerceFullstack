import type { NextFunction, Request, Response } from "express";
import ApiError from "../error/apiError.ts";

export function notFoundMiddleware(
   req: Request,
   res: Response,
   next: NextFunction,
) {
   next(ApiError.notFound("Resource not found. Check URL or HTTP method"));
}
