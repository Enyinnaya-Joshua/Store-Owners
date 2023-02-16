import express, { Application, Request, Response } from "express";
import Router from "./router/router";
import cors from "cors";

const port: number | string = process.env.port || 5000;

const app: Application = express();

app.use(express.json());

require("./config/db");

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});

app.use("/server", Router);

app.listen(port, () => {
  console.log(`Server is listening is to: ${port}`);
});
