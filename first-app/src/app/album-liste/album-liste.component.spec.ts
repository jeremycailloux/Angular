import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListeComponent } from './album-liste.component';

describe('AlbumListeComponent', () => {
  let component: AlbumListeComponent;
  let fixture: ComponentFixture<AlbumListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
