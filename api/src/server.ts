import app from "./app.ts";
import { env } from "./config/env.ts";

const PORT = env.PORT;

app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
});
