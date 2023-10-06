export enum Position {
  Manager = "Manager",
  HR = "HR",
  Engineer = "Engineer",
}

export type Employee = {
  id: string;
  name: string;
  employedAt: Date;
  position: Position;
  salary: number;
};
