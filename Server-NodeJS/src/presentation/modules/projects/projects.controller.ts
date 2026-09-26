import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ProjectsService } from "./projects.service";

/**
 * Controlador de proyectos.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con proyectos,
 * delegando la logica de negocio al ProjectsService.
 */
export class ProjectsController {

  /**
   * Servicio de proyectos.
   */
  private readonly projectsService = new ProjectsService();

  /**
   * Maneja la peticion HTTP para obtener un listado de proyectos.
   *
   * @param req Objeto de peticion de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /projects/10
   * ```
   */
  getAllProjects = (req: Request, res: Response): void => {
    const { countProjects } = req.params;

    setTimeout(() => {
      this.projectsService
      .getAllProjects(Number(countProjects))
      .then((projects) => res.status(201).json(projects))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
