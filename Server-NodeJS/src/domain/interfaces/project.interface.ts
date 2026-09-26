/**
 * Interfaz que representa un proyecto del sistema.
 *
 * @remarks
 * Cada proyecto debe tener un id unico, nombre, descripcion,
 * un estado definido y un presupuesto asignado.
 *
 * @example
 * ```ts
 * const proyecto: Project = {
 *   id: 1,
 *   name: "Portal de Matriculas",
 *   description: "Plataforma web para matricula academica",
 *   status: "Activo",
 *   budget: 15000000
 * };
 * ```
 */
export interface Project {
  /** Identificador unico del proyecto */
  id: number;

  /** Nombre del proyecto */
  name: string;

  /** Descripcion breve del proyecto */
  description: string;

  /** Estado actual del proyecto */
  status: ProjectStatus;

  /** Presupuesto asignado al proyecto */
  budget: number;
}

/**
 * Tipo de estado de un proyecto.
 *
 * @example
 * ```ts
 * const estado: ProjectStatus = "Pendiente";
 * ```
 */
export type ProjectStatus =
  | 'Activo'
  | 'Finalizado'
  | 'Pendiente'
  | 'Cancelado';
