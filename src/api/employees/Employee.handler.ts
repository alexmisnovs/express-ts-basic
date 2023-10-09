import { Request, Response, NextFunction } from "express";
import { Employee } from "./Employee.model";
import { EmployeeDataAccess } from "./Employee.accessor";

const dataAccess = new EmployeeDataAccess();

export const getAll = async (req: Request, res: Response<Employee[]>, next: NextFunction) => {
  // Your logic here
  try {
    const allEmployees: Employee[] | undefined = await dataAccess.getAllEmployees();
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
};

// Add more handlers as needed
export const getById = async (
  req: Request<{ id: string }>,
  res: Response<Employee | undefined>,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const empl: Employee | undefined = await dataAccess.getEmployeeById(id);
    res.json(empl);
  } catch (error) {
    next(error);
  }
};

type ObjectWithId = {
  id: string;
};

export const addEmployee = async (
  req: Request<{}, ObjectWithId, Employee>,
  res: Response<ObjectWithId>,
  next: NextFunction
) => {
  try {
    const emplId = await dataAccess.addEmployee(req.body);
    res.json({
      id: emplId,
    });
  } catch (error) {
    console.log("error");
    next(error);
  }
};
