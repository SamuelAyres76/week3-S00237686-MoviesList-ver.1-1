import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies.component';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
