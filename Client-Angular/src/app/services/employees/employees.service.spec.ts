import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Employee } from '../../interfaces/employees.interface';
import { EMPLOYEES_MOCK } from '../../mocks/employees.mocks';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(EmployeesService);
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

  describe('getAllEmployees', () => {

    it('deberia realizar una peticion GET y retornar una lista de empleados', () => {
      const countEmployees = 5;
      const mockEmployees: Employee[] = EMPLOYEES_MOCK;

      service.getAllEmployees(countEmployees).subscribe((empleados) => {
        expect(empleados).toEqual(mockEmployees);
        expect(empleados.length).toBe(mockEmployees.length);
      });

      const req = httpMock.expectOne(`api/employees/${countEmployees}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockEmployees);
    });

    it('deberia propagar un error si la peticion HTTP falla', () => {
      const countEmployees = 3;

      service.getAllEmployees(countEmployees).subscribe({
        next: () => {
          fail('No deberia emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/employees/${countEmployees}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
