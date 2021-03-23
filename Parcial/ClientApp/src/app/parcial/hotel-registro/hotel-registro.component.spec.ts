import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRegistroComponent } from './hotel-registro.component';

describe('HotelRegistroComponent', () => {
  let component: HotelRegistroComponent;
  let fixture: ComponentFixture<HotelRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
