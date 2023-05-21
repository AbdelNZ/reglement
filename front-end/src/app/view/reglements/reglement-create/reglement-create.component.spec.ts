import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementCreateComponent } from './reglement-create.component';

describe('ReglementCreateComponent', () => {
  let component: ReglementCreateComponent;
  let fixture: ComponentFixture<ReglementCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReglementCreateComponent]
    });
    fixture = TestBed.createComponent(ReglementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
