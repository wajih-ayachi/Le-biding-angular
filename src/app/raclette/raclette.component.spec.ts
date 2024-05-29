import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raclette } from './raclette.component';

describe('UserProfileComponent', () => {
  let component: Raclette;
  let fixture: ComponentFixture<Raclette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raclette]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Raclette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
