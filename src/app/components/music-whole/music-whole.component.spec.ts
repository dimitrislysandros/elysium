import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicWholeComponent } from './music-whole.component';

describe('MusicWholeComponent', () => {
  let component: MusicWholeComponent;
  let fixture: ComponentFixture<MusicWholeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicWholeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicWholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
