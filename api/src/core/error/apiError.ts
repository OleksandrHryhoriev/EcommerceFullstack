export type ErrorHttpStatusCode =
   | 400 // Bad Request
   | 401 // Unauthorized
   | 403 // Forbidden
   | 404 // Not Found
   | 500; // Internal Server Error

class ApiError extends Error {
   statusCode: ErrorHttpStatusCode;
   errors?: any[];

   constructor(
      statusCode: ErrorHttpStatusCode,
      message: string,
      errors?: any[],
   ) {
      super(message);
      this.statusCode = statusCode;
      this.errors = errors;
   }

   static badRequest(message: string, errors?: any[]) {
      return new ApiError(400, message, errors);
   }
   static unauthorized(message: string) {
      return new ApiError(401, message);
   }
   static forbidden(message: string) {
      return new ApiError(403, message);
   }
   static notFound(message: string) {
      return new ApiError(404, message);
   }
   static internal(message: string) {
      return new ApiError(500, message);
   }
}

export default ApiError;
