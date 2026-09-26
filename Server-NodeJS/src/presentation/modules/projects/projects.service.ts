import { ProjectStatus, Project } from "../../../domain/interfaces/project.interface";
import { faker } from "@faker-js/faker";

/**
 * Servicio encargado de la generacion y gestion de proyectos.
 *
 * @remarks
 * Este servicio utiliza la libreria faker para generar proyectos
 * ficticios, principalmente con fines de prueba o demostracion.
 */
export class ProjectsService {

  /**
   * Lista de estados disponibles para los proyectos.
   */
  private projectStatuses: ProjectStatus[] = [
    'Activo',
    'Finalizado',
    'Pendiente',
    'Cancelado',
  ];

  /**
   * Obtiene un listado de proyectos generados dinamicamente.
   *
   * @param countProjects Cantidad de proyectos a generar
   * @returns Promesa que resuelve un arreglo de proyectos
   *
   * @example
   * ```ts
   * const projects = await projectsService.getAllProjects(5);
   * ```
   */
  public async getAllProjects(countProjects: number): Promise<Project[]> {
    const projects: Promise<Project>[] = [];

    for (let i = 1; i <= countProjects; i++) {
      projects.push(this.generateProject(i));
    }

    return Promise.all(projects);
  }

  /**
   * Genera un proyecto ficticio.
   *
   * @param id Identificador unico del proyecto
   * @returns Promesa que resuelve un proyecto generado
   */
  private generateProject(id: number): Promise<Project> {
    return Promise.resolve({
      id,
      name: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      status: faker.helpers.arrayElement(this.projectStatuses),
      budget: faker.number.int({ min: 3000000, max: 20000000 }),
    });
  }
}
