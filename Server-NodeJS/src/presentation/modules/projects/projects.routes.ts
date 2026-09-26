import { Router } from "express";
import { ProjectsController } from "./projects.controller";

export class ProjectsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProjectsController();

    /**
     * @openapi
     * /api/projects/{countProjects}:
     *   get:
     *     summary: Obtener listado de proyectos
     *     description: Retorna una lista de proyectos generados dinamicamente segun la cantidad solicitada.
     *     tags:
     *       - Projects
     *     parameters:
     *       - in: path
     *         name: countProjects
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de proyectos a generar
     *     responses:
     *       200:
     *         description: Lista de proyectos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: "#/components/schemas/Project"
     *       400:
     *         description: Parametro invalido
     */
    router.get("/:countProjects", controller.getAllProjects);

    return router;
  }
}
