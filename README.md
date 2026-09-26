# Taller: Client-Server en Angular y NodeJS

Este proyecto fue generado utilizando Angular CLI 20.3.14.

El objetivo del taller es practicar la creación de dos proyectos que representan la arquitectura cliente-servidor, usando las tecnologías de Angular y Node.js.

Integrantes: Santiago Santacruz y Juan Felipe Marulanda.

## Requisitos previos

Antes de iniciar, se debe tener instalado Node.js, npm, Angular CLI, Git y Visual Studio Code. Se puede verificar la versión de Angular CLI con el comando ng version.

## Iniciar el servidor (Server-NodeJS) en modo desarrollo

Se debe ubicar la consola en la raíz del proyecto Server-NodeJS, donde está el archivo package.json, e instalar las dependencias con npm i. Luego se ejecuta el proyecto con npm run start. Cuando el servidor esté corriendo, queda disponible en http://localhost:3000.

## Documentación de las APIs con Swagger

La documentación de todas las APIs se encuentra en http://localhost:3000/api/docs. Ahí se puede consultar el detalle de cada endpoint, sus parámetros y ejemplos de respuesta.

## Funcionamiento de las APIs

El backend expone cinco recursos, cada uno generando datos dinámicamente mediante faker.js:

http://localhost:3000/api/users/10 devuelve un listado de usuarios.

http://localhost:3000/api/products/10 devuelve un listado de productos.

http://localhost:3000/api/employees/10 devuelve un listado de empleados.

http://localhost:3000/api/projects/10 devuelve un listado de proyectos.

http://localhost:3000/api/categories/10 devuelve un listado de categorías.

En todos los casos, el número al final de la URL indica la cantidad de registros a generar.

## Iniciar el cliente (Client-Angular) en modo desarrollo

Se debe ubicar la consola en la raíz del proyecto Client-Angular, donde está el archivo package.json, e instalar las dependencias con npm i. Luego se ejecuta el proyecto con npm run start. Cuando el servidor esté corriendo, se puede acceder desde el navegador a http://localhost:4200.

El cliente cuenta con cinco vistas, todas consumiendo datos reales del backend: Usuarios, Productos, Empleados, Proyectos y Categorías.

## Pruebas unitarias

El proyecto utiliza Jest para las pruebas unitarias del cliente. Se pueden ejecutar una sola vez con npm run test, en modo watch con npm run test:watch, o generando un reporte de cobertura con npm run test:coverage.

## Generar documentación con Compodoc

El comando npm run compodoc genera un sitio estático con la documentación técnica del proyecto, incluyendo componentes, servicios, interfaces y sus dependencias, a partir de los comentarios JSDoc presentes en el código fuente.

## Módulos nuevos implementados en este taller

Sobre la arquitectura ya existente del proyecto se agregaron tres módulos nuevos, siguiendo el mismo patrón de capas del backend (routes, controller, service) y el mismo patrón de contenedor y presentación del cliente.

En el backend, cada módulo nuevo (Empleados, Proyectos y Categorías) expone un endpoint GET que genera datos dinámicamente con faker.js y está documentado en Swagger con el mismo estilo que los módulos originales de Usuarios y Productos.

En el cliente, cada módulo nuevo cuenta con su interfaz, su servicio consumiendo la API mediante HttpClient, su componente de tabla, su página contenedora con manejo de estados, y sus respectivas pruebas unitarias con Jest.

## Generación de archivos con Angular CLI

Para generar un componente standalone dentro de una carpeta propia se usa el comando ng g c seguido de la ruta y el nombre del componente. Para generar un servicio se usa ng g s seguido de la ruta y el nombre del servicio.

## Observaciones importantes

En este taller se utilizan componentes standalone. Mantener una estructura de carpetas clara favorece la escalabilidad y el mantenimiento del proyecto. Es importante revisar tanto la cobertura de las pruebas unitarias como la documentación generada antes de dar por terminado un módulo.