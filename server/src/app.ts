import express from "express";
import windDataRoutes from "./routes/winddata";
import districtDataRoutes from "./routes/districtdata";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";
require("dotenv").config()

const cors = require('cors')
const app = express();

app.use(json());
app.use(cors({ origin: true }));

app.use(urlencoded({ extended: true }));

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);
app.use("/winddata", windDataRoutes);
app.use("/districtdata", districtDataRoutes);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(process.env.PORT, () => {
  console.log("Server started on port ", process.env.PORT);
});
