import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`Select Event Binding`, () => {
    it(`should change 'selectedValue' when selectedIndex changed in HTML`, () => {
      const select = debugElement.query(By.css('select')).nativeElement;

      select.selectedIndex = 1;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(component.selectedValue).toBe('1');

      select.selectedIndex = 2;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(component.selectedValue).toBe('2');

      select.selectedIndex = 0;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(component.selectedValue).toBe('0');
    });

    it(`should change 'selectedValue' when 'selectedValue' changed`, () => {
      target.selectedValue = 'fake';
      expect(target.selectedValue).toBe('fake');
    });
  });
});
