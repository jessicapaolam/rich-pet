import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Port3Component } from './port3.component';

describe('Port3Component', () => {
  let component: Port3Component;
  let fixture: ComponentFixture<Port3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Port3Component]
    });
    fixture = TestBed.createComponent(Port3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
