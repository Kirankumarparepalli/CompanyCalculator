import { TestBed, async } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator/calculator.service';
import { MockComponent } from 'ng2-mock-component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
 let fixture, component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [
        AppComponent,
        MockComponent({selector: 'calculator-component'})
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have title as 'Our Pretend Company Calculator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Our Pretend Company Calculator');
  }));

  it(`should have subtitle as 'Welcome to the most popular calculator!!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitle).toEqual('Welcome to the most popular calculator!!');
  }));

});
