import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ProjectStatus, Project } from '../../interfaces/projects.interface';

/**
 * Componente de tabla de proyectos.
 *
 * Se utiliza para mostrar un listado de proyectos en una tabla,
 * mostrando informacion como nombre, descripcion, presupuesto y un
 * badge visual que indica el estado de cada proyecto.
 */
@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProjectsTableComponent {
  @Input() projects: Project[] = [];

  statusMap: Record<ProjectStatus, BadgeType> = {
    'Activo': 'success',
    'Finalizado': 'primary',
    'Pendiente': 'warning',
    'Cancelado': 'danger',
  }
}
