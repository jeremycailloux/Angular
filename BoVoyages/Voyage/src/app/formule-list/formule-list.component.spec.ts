import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleListComponent } from './formule-list.component';

describe('FormuleListComponent', () => {
  let component: FormuleListComponent;
  let fixture: ComponentFixture<FormuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
