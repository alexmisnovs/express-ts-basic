import { Request, Response, NextFunction } from "express";
import { Employee, Position } from "./Employee.model";

export function validateAsEmployee(req: Request, res: Response, next: NextFunction) {
  try {
    const requestBody = req.body;

    if (!(requestBody as Employee).name) {
      throw new FieldError("Name Required");
    }
    // if (!["Manager", "HR", "Engineer"].includes((requestBody as Employee).position)) {
    //   throw new FieldError("Invalid Position");
    // }
    if (!Object.values(Position).includes((requestBody as Employee).position)) {
      throw new FieldError("Invalid position!!");
    }
    if (!(requestBody as Employee).salary) {
      throw new FieldError("Salary is required");
    }

    const parsedBody: Partial<Employee> = {
      name: requestBody.name,
      position: requestBody.position,
      salary: requestBody.salary,
    };

    // set request body
    req.body = parsedBody;
    next();
  } catch (error) {
    if (error instanceof FieldError) {
      res.status(400);
    }
    next(error);
  }
}

class FieldError extends Error {}
