/**
 * Interfaz que representa un empleado.
 *
 * @remarks
 * Cada empleado debe tener un id unico, nombres y apellidos,
 * correo electronico, un departamento definido y un salario.
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
 */
export type EmployeeDepartment =
  | 'Sistemas'
  | 'Ventas'
  | 'Recursos Humanos'
  | 'Finanzas'
  | 'Logistica';
