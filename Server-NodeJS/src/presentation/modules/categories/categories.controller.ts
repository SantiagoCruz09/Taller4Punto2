import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CategoriesService } from "./categories.service";

/**
 * Controlador de categorias.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con categorias,
 * delegando la logica de negocio al CategoriesService.
 */
export class CategoriesController {

  /**
   * Servicio de categorias.
   */
  private readonly categoriesService = new CategoriesService();

  /**
   * Maneja la peticion HTTP para obtener un listado de categorias.
   *
   * @param req Objeto de peticion de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /categories/10
   * ```
   */
  getAllCategories = (req: Request, res: Response): void => {
    const { countCategories } = req.params;

    setTimeout(() => {
      this.categoriesService
      .getAllCategories(Number(countCategories))
      .then((categories) => res.status(201).json(categories))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
