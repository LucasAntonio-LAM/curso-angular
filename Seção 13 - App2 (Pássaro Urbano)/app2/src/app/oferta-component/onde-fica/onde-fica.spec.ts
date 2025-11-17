import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeFica } from './onde-fica';

describe('OndeFica', () => {
  let component: OndeFica;
  let fixture: ComponentFixture<OndeFica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OndeFica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndeFica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
