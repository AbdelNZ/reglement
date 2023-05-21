import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementEditComponent } from './reglement-edit.component';

describe('ReglementEditComponent', () => {
  let component: ReglementEditComponent;
  let fixture: ComponentFixture<ReglementEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReglementEditComponent]
    });
    fixture = TestBed.createComponent(ReglementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
