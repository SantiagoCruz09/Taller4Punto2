import { CategoryStatus, Category } from "../../../domain/interfaces/category.interface";
import { faker } from "@faker-js/faker";

/**
 * Servicio encargado de la generacion y gestion de categorias.
 *
 * @remarks
 * Este servicio utiliza la libreria faker para generar categorias
 * ficticias, principalmente con fines de prueba o demostracion.
 */
export class CategoriesService {

  /**
   * Lista de estados disponibles para las categorias.
   */
  private categoryStatuses: CategoryStatus[] = [
    'Activa',
    'Inactiva',
  ];

  /**
   * Obtiene un listado de categorias generadas dinamicamente.
   *
   * @param countCategories Cantidad de categorias a generar
   * @returns Promesa que resuelve un arreglo de categorias
   *
   * @example
   * ```ts
   * const categories = await categoriesService.getAllCategories(5);
   * ```
   */
  public async getAllCategories(countCategories: number): Promise<Category[]> {
    const categories: Promise<Category>[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push(this.generateCategory(i));
    }

    return Promise.all(categories);
  }

  /**
   * Genera una categoria ficticia.
   *
   * @param id Identificador unico de la categoria
   * @returns Promesa que resuelve una categoria generada
   */
  private generateCategory(id: number): Promise<Category> {
    return Promise.resolve({
      id,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      status: faker.helpers.arrayElement(this.categoryStatuses),
    });
  }
}
