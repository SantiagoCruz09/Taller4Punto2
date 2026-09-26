/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       description: Representa un empleado del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - email
 *         - department
 *         - salary
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Daniela
 *         lastName:
 *           type: string
 *           example: Rojas
 *         email:
 *           type: string
 *           format: email
 *           example: daniela.rojas@example.com
 *         department:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Ventas
 *             - Recursos Humanos
 *             - Finanzas
 *             - Logistica
 *           example: Sistemas
 *         salary:
 *           type: number
 *           example: 3800000
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       description: Representa un proyecto del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - status
 *         - budget
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Portal de Matriculas
 *         description:
 *           type: string
 *           example: Plataforma web para matricula academica de estudiantes
 *         status:
 *           type: string
 *           enum:
 *             - Activo
 *             - Finalizado
 *             - Pendiente
 *             - Cancelado
 *           example: Activo
 *         budget:
 *           type: number
 *           example: 15000000
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoria del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Electronica
 *         description:
 *           type: string
 *           example: Dispositivos electronicos y tecnologia
 *         status:
 *           type: string
 *           enum:
 *             - Activa
 *             - Inactiva
 *           example: Activa
 */
export {};