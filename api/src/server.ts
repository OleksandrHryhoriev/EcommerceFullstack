import app from "./app.ts";
import { env } from "./config/env.ts";

const PORT = env.PORT;

if (env.NODE_ENV !== "production") {
   app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
   });
}
