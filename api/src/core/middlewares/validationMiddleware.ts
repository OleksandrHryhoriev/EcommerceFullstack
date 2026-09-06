import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import ApiError from "../error/apiError.ts";

export function validateData(schema: z.ZodType) {
   return async (req: Request, res: Response, next: NextFunction) => {
      const result = await schema.safeParseAsync(req.body);

      if (!result.success) {
         const errorMessages = result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
         }));

         throw ApiError.badRequest("Invalid request data", errorMessages);
      }

      req.body = result.data;
      next();
   };
}

export function validateParams<T extends z.ZodObject<any, any>>(schema: T) {
   return async (
      req: Request<z.infer<T>, any, any, any>,
      res: Response,
      next: NextFunction,
   ) => {
      const result = await schema.safeParseAsync(req.params);

      if (!result.success) {
         const errorMessages = result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
         }));

         throw ApiError.badRequest("Invalid URL parameters", errorMessages);
      }

      req.params = result.data;
      next();
   };
}
