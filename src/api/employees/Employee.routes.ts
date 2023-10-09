import { Router, Request, Response, json } from "express";
import { addEmployee, getAll, getById } from "./Employee.handler";

const employeeRouter = Router();
employeeRouter.use(json());
// employeeRouter.get("/", (req: Request, res: Response) => {
//   res.send("Employee route");
// });
employeeRouter.get("/", getAll);
employeeRouter.get("/:id", getById);
employeeRouter.post("/", addEmployee);

export default employeeRouter;
