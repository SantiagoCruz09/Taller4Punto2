import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../interfaces/employees.interface';

/**
 * Servicio encargado de la gestion de empleados.
 *
 * Proporciona metodos para obtener informacion de empleados
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private employeesService: EmployeesService) {}
 *
 * this.employeesService.getAllEmployees(10).subscribe(employees => {
 *   console.log(employees);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de empleados desde el backend.
   *
   * @param countEmployees Numero de empleados a obtener.
   * @returns Observable que emite un array de empleados.
   */
  getAllEmployees(countEmployees: number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`api/employees/${countEmployees}`);
  }
}
