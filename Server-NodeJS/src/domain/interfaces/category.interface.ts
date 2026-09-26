/**
 * Interfaz que representa una categoria del sistema.
 *
 * @remarks
 * Cada categoria debe tener un id unico, un nombre, una descripcion
 * y un estado que indica si esta activa o inactiva.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: "Electronica",
 *   description: "Productos electronicos y tecnologia",
 *   status: "Activa"
 * };
 * ```
 */
export interface Category {
  /** Identificador unico de la categoria */
  id: number;

  /** Nombre de la categoria */
  name: string;

  /** Descripcion breve de la categoria */
  description: string;

  /** Estado actual de la categoria */
  status: CategoryStatus;
}

/**
 * Tipo de estado de una categoria.
 *
 * @example
 * ```ts
 * const estado: CategoryStatus = "Inactiva";
 * ```
 */
export type CategoryStatus =
  | 'Activa'
  | 'Inactiva';
