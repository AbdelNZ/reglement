import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementViewComponent } from './reglement-view.component';

describe('ReglementViewComponent', () => {
  let component: ReglementViewComponent;
  let fixture: ComponentFixture<ReglementViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReglementViewComponent]
    });
    fixture = TestBed.createComponent(ReglementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
