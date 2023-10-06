import { Request, Response, NextFunction } from "express";
import { Employee } from "./Employee.model";

export const getAll = (req: Request, res: Response<Employee[]>, next: NextFunction) => {
  // Your logic here
  try {
    const allEmployees: Employee[] = [];
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
    const response = undefined;
  } catch (error) {
    next(error);
  }
};

type ObjectWithId = {
  id: string;
};

export const addEmplyee = async (
  req: Request<{}, ObjectWithId, Employee>,
  res: Response<ObjectWithId>,
  next: NextFunction
) => {
  try {
    const response = { id: "123" };
  } catch (error) {
    next(error);
  }
};
