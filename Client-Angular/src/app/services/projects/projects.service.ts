import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/projects.interface';

/**
 * Servicio encargado de la gestion de proyectos.
 *
 * Proporciona metodos para obtener informacion de proyectos
 * desde la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de proyectos desde el backend.
   *
   * @param countProjects Numero de proyectos a obtener.
   * @returns Observable que emite un array de proyectos.
   */
  getAllProjects(countProjects: number): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`api/projects/${countProjects}`);
  }
}
