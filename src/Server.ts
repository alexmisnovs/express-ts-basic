import express, { Application, Request, Response, NextFunction } from "express";
import employeeRouter from "./api/employees/Employee.routes";
import reportsRouter from "./api/reports/Reports.route";

export class Server {
  public static app: Application = express();

  public static startServer(): void {
    this.app.set("port", process.env.PORT || 8000);
    this.app.use("/employees", employeeRouter);
    this.app.use("/reports", reportsRouter);
    //  error middleware
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(err.stack);
      res.send(err.message);
      next();
    });

    this.app.get("/hello", (req: Request, res: Response) => {
      res.status(200).send("Hello World");
    });

    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is running on port ${this.app.get("port")}`);
    });
  }
}

Server.startServer();
