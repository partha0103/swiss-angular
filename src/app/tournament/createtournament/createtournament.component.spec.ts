import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetournamentComponent } from './createtournament.component';

describe('CreatetournamentComponent', () => {
  let component: CreatetournamentComponent;
  let fixture: ComponentFixture<CreatetournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
