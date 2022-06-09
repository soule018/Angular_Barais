import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokededetailComponent } from './pokededetail.component';

describe('PokededetailComponent', () => {
  let component: PokededetailComponent;
  let fixture: ComponentFixture<PokededetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokededetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokededetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
