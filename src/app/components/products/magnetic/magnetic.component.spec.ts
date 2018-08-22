import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticComponent } from './magnetic.component';

describe('MagneticComponent', () => {
  let component: MagneticComponent;
  let fixture: ComponentFixture<MagneticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
