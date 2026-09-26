import { Router } from "express";
import { UsersRoutes } from "./modules/users/users.routes";
import { ProductsRoutes } from "./modules/products/products.routes";
import { EmployeesRoutes } from "./modules/employees/employees.routes";
import { ProjectsRoutes } from "./modules/projects/projects.routes";
import { CategoriesRoutes } from "./modules/categories/categories.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos de usuarios, productos,
 * empleados, proyectos y categorías.
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);
    router.use("/api/employees", EmployeesRoutes.routes);
    router.use("/api/projects", ProjectsRoutes.routes);
    router.use("/api/categories", CategoriesRoutes.routes);

    return router;
  }
}