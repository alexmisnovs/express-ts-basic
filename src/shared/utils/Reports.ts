import { Employee } from "../../api/employees/Employee.model";

export function printAllSalaries(employees: Employee[] | undefined) {
  let allSalaries;
  if (Array.isArray(employees)) {
    if (employees.length > 0) {
      allSalaries = employees.map(empl => ({
        [empl.name]: empl.salary,
      }));
      return allSalaries;
    }
  }
  return { message: "No employees found" };
}

export function calculateAllSalaries(employees: Employee[] | undefined) {
  let totalSalaries: number = 0;

  if (Array.isArray(employees)) {
    if (employees.length > 0) {
      employees.forEach(employee => {
        totalSalaries += employee.salary;
      });
      return totalSalaries;
    }
  }
  return { message: "No employees found" };
}
