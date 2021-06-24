import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCartComponent } from './read-cart.component';

describe('ReadCartComponent', () => {
  let component: ReadCartComponent;
  let fixture: ComponentFixture<ReadCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
