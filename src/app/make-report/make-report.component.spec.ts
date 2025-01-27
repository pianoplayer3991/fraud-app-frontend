import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeReportComponent } from './make-report.component';

describe('MakeReportComponent', () => {
  let component: MakeReportComponent;
  let fixture: ComponentFixture<MakeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
