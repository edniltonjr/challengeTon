import { app } from "./app";

const port = process.env.APP_PORT || 3338;

app.listen(port, () => console.log("Server is running!"));
