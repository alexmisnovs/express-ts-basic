import { Request, Response, NextFunction } from "express";
import { Employee, Position } from "./Employee.model";

import { ZodError, z } from "zod";

const employeeSchema = z
  .object({
    name: z.string(),
    position: z.nativeEnum(Position),
    salary: z.number(),
    employedAt: z.date().optional(),
    id: z.string().optional(),
  })
  .strict();

// can infer type from zod schema
// export type ZodEmployee = z.infer<typeof employeeSchema>

export function validateAsEmployee(req: Request, res: Response, next: NextFunction) {
  try {
    const paresedResult = employeeSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400);
    }
    next(error);
  }
}
