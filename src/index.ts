import express from "express";
import routes from "./api/.";
//
const app = express();
app.use("/api/img", routes);
/* --------------------- */
const port = 3000;
app.listen(port, () => {
  process.stdout.write(`server started at --> http://localhost:${port}\n`);
});
/* ==================================== */
export default app;
