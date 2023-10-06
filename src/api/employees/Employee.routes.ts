import { Router, Request, Response } from "express";
import { getAll, getById } from "./Employee.handler";

const employeeRouter = Router();

// employeeRouter.get("/", (req: Request, res: Response) => {
//   res.send("Employee route");
// });
employeeRouter.get("/", getAll);
employeeRouter.get("/:id", getById);

export default employeeRouter;
