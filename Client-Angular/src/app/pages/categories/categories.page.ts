import { Component, inject } from '@angular/core';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent],
})
export class CategoriesPage {
  categories: Category[] = [];
  state: State = 'init';

  private categoriesService = inject(CategoriesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories(10).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
