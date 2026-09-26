import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { CategoriesPage } from './pages/categories/categories.page';

export const routes: Routes = [
  { path: 'users', component: UsersPage },
  { path: 'products', component: ProductsPage },
  { path: 'employees', component: EmployeesPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'categories', component: CategoriesPage },
  { path: '**', redirectTo: 'users' },
];