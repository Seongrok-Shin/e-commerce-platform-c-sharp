import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../app/components/footer/footer.component';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a copyright with the current year', () => {
    const currentYear = new Date().getFullYear();
    const compiled = fixture.nativeElement;
    const actualText = compiled.querySelector('.copyright').textContent.trim();
    expect(actualText).toContain(
      `Seongrok Shin © ${currentYear} all rights reserved`.trim()
    );
  });
});
