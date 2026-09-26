import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CategoryStatus, Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorias.
 *
 * Se utiliza para mostrar un listado de categorias en una tabla,
 * mostrando informacion como nombre, descripcion y un badge visual
 * que indica el estado de cada categoria.
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CategoriesTableComponent {
  @Input() categories: Category[] = [];

  statusMap: Record<CategoryStatus, BadgeType> = {
    'Activa': 'success',
    'Inactiva': 'secondary',
  }
}
