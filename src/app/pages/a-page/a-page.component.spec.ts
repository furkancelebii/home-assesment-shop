import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APageComponent } from './a-page.component';

describe('APageComponent', () => {
  let component: APageComponent;
  let fixture: ComponentFixture<APageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
