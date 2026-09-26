import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';

/**
 * Servicio encargado de la gestion de categorias.
 *
 * Proporciona metodos para obtener informacion de categorias
 * desde la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de categorias desde el backend.
   *
   * @param countCategories Numero de categorias a obtener.
   * @returns Observable que emite un array de categorias.
   */
  getAllCategories(countCategories: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`api/categories/${countCategories}`);
  }
}
