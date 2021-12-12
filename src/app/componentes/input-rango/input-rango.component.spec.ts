import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRangoComponent } from './input-rango.component';

describe('InputRangoComponent', () => {
  let component: InputRangoComponent;
  let fixture: ComponentFixture<InputRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
