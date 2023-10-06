import express, { Application, Request, Response } from "express";
import employeeRouter from "./api/employees/Employee.routes";

export class Server {
  public static app: Application = express();

  public static startServer(): void {
    this.app.set("port", process.env.PORT || 8000);
    this.app.use("/employees", employeeRouter);

    this.app.get("/hello", (req: Request, res: Response) => {
      res.status(200).send("Hello World");
    });

    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is running on port ${this.app.get("port")}`);
    });
  }
}

Server.startServer();
