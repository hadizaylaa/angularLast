import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetsColor2Component } from './componets-color2.component';

describe('ComponetsColor2Component', () => {
  let component: ComponetsColor2Component;
  let fixture: ComponentFixture<ComponetsColor2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponetsColor2Component]
    });
    fixture = TestBed.createComponent(ComponetsColor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
