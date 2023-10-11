import { Router, Request, Response, json } from "express";
import { resolveInjectedDependency } from "../../shared/Container";
import { EmployeeDataAccess } from "../employees/Employee.accessor";
import { calculateAllSalaries, printAllSalaries } from "../../shared/utils/Reports";

const reportsRouter = Router();
reportsRouter.use(json());

const employeeDataAccess = resolveInjectedDependency<EmployeeDataAccess>("EmployeeDataAccess");

//TODO: create reports handler
reportsRouter.get("/salaries", async (req: Request, res: Response) => {
  const allEmployees = await employeeDataAccess.getAllEmployees();

  res.json(printAllSalaries(allEmployees));
});
reportsRouter.get("/salaries/total", async (req: Request, res: Response) => {
  const allEmployees = await employeeDataAccess.getAllEmployees();

  res.json(calculateAllSalaries(allEmployees));
});

export default reportsRouter;
