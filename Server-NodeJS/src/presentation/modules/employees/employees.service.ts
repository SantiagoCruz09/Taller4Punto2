import { EmployeeDepartment, Employee } from "../../../domain/interfaces/employee.interface";
import { faker } from "@faker-js/faker";

/**
 * Servicio encargado de la generacion y gestion de empleados.
 *
 * @remarks
 * Este servicio utiliza la libreria faker para generar empleados
 * ficticios, principalmente con fines de prueba o demostracion.
 */
export class EmployeesService {

  /**
   * Lista de departamentos disponibles para los empleados.
   */
  private employeeDepartments: EmployeeDepartment[] = [
    'Sistemas',
    'Ventas',
    'Recursos Humanos',
    'Finanzas',
    'Logistica',
  ];

  /**
   * Obtiene un listado de empleados generados dinamicamente.
   *
   * @param countEmployees Cantidad de empleados a generar
   * @returns Promesa que resuelve un arreglo de empleados
   *
   * @example
   * ```ts
   * const employees = await employeesService.getAllEmployees(5);
   * ```
   */
  public async getAllEmployees(countEmployees: number): Promise<Employee[]> {
    const employees: Promise<Employee>[] = [];

    for (let i = 1; i <= countEmployees; i++) {
      employees.push(this.generateEmployee(i));
    }

    return Promise.all(employees);
  }

  /**
   * Genera un empleado ficticio.
   *
   * @param id Identificador unico del empleado
   * @returns Promesa que resuelve un empleado generado
   */
  private generateEmployee(id: number): Promise<Employee> {
    return Promise.resolve({
      id,
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      department: faker.helpers.arrayElement(this.employeeDepartments),
      salary: faker.number.int({ min: 2000000, max: 5000000 }),
    });
  }
}
