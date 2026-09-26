/**
 * Interfaz que representa un empleado del sistema.
 *
 * @remarks
 * Cada empleado debe tener un id unico, nombres y apellidos,
 * correo electronico, un departamento definido y un salario.
 *
 * @example
 * ```ts
 * const empleado: Employee = {
 *   id: 1,
 *   name: "Daniela",
 *   lastName: "Rojas",
 *   email: "daniela.rojas@example.com",
 *   department: "Sistemas",
 *   salary: 3800000
 * };
 * ```
 */
export interface Employee {
  /** Identificador unico del empleado */
  id: number;

  /** Nombre del empleado */
  name: string;

  /** Apellido del empleado */
  lastName: string;

  /** Correo electronico del empleado */
  email: string;

  /** Departamento al que pertenece el empleado */
  department: EmployeeDepartment;

  /** Salario mensual del empleado */
  salary: number;
}

/**
 * Tipo de departamento de un empleado.
 *
 * @remarks
 * Este tipo restringe los departamentos a los valores predefinidos:
 * Sistemas, Ventas, Recursos Humanos, Finanzas y Logistica.
 *
 * @example
 * ```ts
 * const depto: EmployeeDepartment = "Ventas";
 * ```
 */
export type EmployeeDepartment =
  | 'Sistemas'
  | 'Ventas'
  | 'Recursos Humanos'
  | 'Finanzas'
  | 'Logistica';
