import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetsColor1Component } from './componets-color1.component';

describe('ComponetsColor1Component', () => {
  let component: ComponetsColor1Component;
  let fixture: ComponentFixture<ComponetsColor1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponetsColor1Component]
    });
    fixture = TestBed.createComponent(ComponetsColor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
