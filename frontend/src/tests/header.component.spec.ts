import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../app/components/header/header.component';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} },
            paramMap: of({}),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "E-commerce Platform"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(
      'E-commerce Platform'
    );
  });
  it('should apply mobile class when viewport is small', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(400);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector(
      '[data-testid="mobile-menu"]'
    );
    expect(headerElement).toBeTruthy();
    expect(headerElement.classList).toContain('menu');
  });
});
