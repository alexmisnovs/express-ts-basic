import { AwesomeDb } from "../../database/AwesomeDb";
import { Employee } from "./Employee.model";

export class EmployeeDataAccess {
  private employeeDB = new AwesomeDb<Employee>();

  public async addEmployee(empl: Employee): Promise<string> {
    empl.employedAt = new Date();
    const id = await this.employeeDB.insert(empl);
    return id;
  }

  public async getEmployeeById(id: string): Promise<Employee | undefined> {
    const empl = await this.employeeDB.getBy("id", id);
    return empl;
  }

  public async getAllEmployees(): Promise<Employee[] | undefined> {
    return this.employeeDB.getAllElements();
  }
}
