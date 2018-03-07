import { TestBed, async } from '@angular/core/testing';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from './calculator.service';
import { MockComponent } from 'ng2-mock-component';
import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
  let calculatorComponent: CalculatorComponent;
  let calculatorService: CalculatorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule, MatSelectModule, MatButtonModule,MatFormFieldModule],
      declarations: [],
      providers: [{provide: CalculatorService}]
    }).compileComponents();

 calculatorComponent = TestBed.createComponent(CalculatorComponent).componentInstance;
  calculatorService = TestBed.get(CalculatorService);
  spyOn(calculatorService, 'calculate').and.returnValue(10);
  }));

  it('should create the calculator component', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

});
