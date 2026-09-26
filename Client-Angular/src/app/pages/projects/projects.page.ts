import { Component, inject } from '@angular/core';
import { ProjectsTableComponent } from '../../components/projects-table/projects-table.component';
import { Project } from '../../interfaces/projects.interface';
import { ProjectsService } from '../../services/projects/projects.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  imports: [ProjectsTableComponent, AlertComponent],
})
export class ProjectsPage {
  projects: Project[] = [];
  state: State = 'init';

  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.state = 'loading';
    this.projectsService.getAllProjects(10).subscribe({
      next: (projects) => {
        this.projects = projects;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
