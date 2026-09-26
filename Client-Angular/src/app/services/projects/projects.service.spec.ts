import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Project } from '../../interfaces/projects.interface';
import { PROJECTS_MOCK } from '../../mocks/projects.mocks';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ProjectsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creacion del servicio', () => {

    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllProjects', () => {

    it('deberia realizar una peticion GET y retornar una lista de proyectos', () => {
      const countProjects = 5;
      const mockProjects: Project[] = PROJECTS_MOCK;

      service.getAllProjects(countProjects).subscribe((proyectos) => {
        expect(proyectos).toEqual(mockProjects);
        expect(proyectos.length).toBe(mockProjects.length);
      });

      const req = httpMock.expectOne(`api/projects/${countProjects}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProjects);
    });

    it('deberia propagar un error si la peticion HTTP falla', () => {
      const countProjects = 3;

      service.getAllProjects(countProjects).subscribe({
        next: () => {
          fail('No deberia emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/projects/${countProjects}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
