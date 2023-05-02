import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsertComponent } from './create-insert.component';

describe('CreateInsertComponent', () => {
  let component: CreateInsertComponent;
  let fixture: ComponentFixture<CreateInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
