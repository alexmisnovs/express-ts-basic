import { Router, Request, Response, json } from "express";
import { addEmployee, getAll, getById } from "./Employee.handler";
import { validateAsEmployee } from "./Validators";

const employeeRouter = Router();
employeeRouter.use(json());
// employeeRouter.get("/", (req: Request, res: Response) => {
//   res.send("Employee route");
// });
employeeRouter.get("/", getAll);
employeeRouter.get("/:id", getById);
employeeRouter.post("/", validateAsEmployee, addEmployee);

export default employeeRouter;
