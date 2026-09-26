import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPLOYEES_MOCK } from '../../mocks/employees.mocks';
import { EmployeesTableComponent } from './employees-table.component';

describe('EmployeesTableComponent', () => {
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada empleado', () => {
    component.employees = EMPLOYEES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.employees.length);
  });

  it('deberia mapear cada departamento a su BadgeType correcto', () => {
    expect(component.departmentMap['Sistemas']).toBe('primary');
    expect(component.departmentMap['Ventas']).toBe('success');
    expect(component.departmentMap['Recursos Humanos']).toBe('warning');
    expect(component.departmentMap['Finanzas']).toBe('info');
    expect(component.departmentMap['Logistica']).toBe('secondary');
  });
});
