import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkbarComponent } from './akbar.component';

describe('AkbarComponent', () => {
  let component: AkbarComponent;
  let fixture: ComponentFixture<AkbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
