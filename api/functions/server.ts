import serverless from "serverless-http";
import app from "../src/app.ts";
// Netlify uses a serverless handler instead of app.listen()
export const handler = serverless(app);
