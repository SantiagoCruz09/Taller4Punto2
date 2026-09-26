import { Router } from "express";
import { CategoriesController } from "./categories.controller";

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController();

    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtener listado de categorias
     *     description: Retorna una lista de categorias generadas dinamicamente segun la cantidad solicitada.
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de categorias a generar
     *     responses:
     *       200:
     *         description: Lista de categorias generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: "#/components/schemas/Category"
     *       400:
     *         description: Parametro invalido
     */
    router.get("/:countCategories", controller.getAllCategories);

    return router;
  }
}
