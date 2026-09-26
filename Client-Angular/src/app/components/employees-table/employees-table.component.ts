import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { EmployeeDepartment, Employee } from '../../interfaces/employees.interface';

/**
 * Componente de tabla de empleados.
 *
 * Se utiliza para mostrar un listado de empleados en una tabla,
 * mostrando informacion como nombre, email, salario y un badge
 * visual que indica el departamento de cada empleado.
 *
 * @example
 * ```html
 * <app-employees-table [employees]="employeesList"></app-employees-table>
 * ```
 */
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class EmployeesTableComponent {
  /**
   * Listado de empleados que se mostraran en la tabla.
   */
  @Input() employees: Employee[] = [];

  /**
   * Mapeo de departamentos de empleados a tipos de Badge.
   */
  departmentMap: Record<EmployeeDepartment, BadgeType> = {
    'Sistemas': 'primary',
    'Ventas': 'success',
    'Recursos Humanos': 'warning',
    'Finanzas': 'info',
    'Logistica': 'secondary',
  }
}