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

  it('should calculate the addition of 5,6 as 11', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 5;
    component.secondInputNumber = 6;
    component.operation = '+';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(11);
  }));

  it('should calculate the multiplication of 9,5 as 45', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 9;
    component.secondInputNumber = 5;
    component.operation = '*';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(45);
  }));

  it('should calculate the divide of 55 with 11 as 5', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 55;
    component.secondInputNumber = 11;
    component.operation = '/';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(5);
  }));

  it('should calculate the sub of 31,16 as 15', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 31;
    component.secondInputNumber = 16;
    component.operation = '-';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(15);
  }));

  it('should remove the values on Clear', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 55;
    component.secondInputNumber = 11;
    component.operation = '/';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(5);
    let clearResultsButton = fixture.debugElement.nativeElement.querySelector('#clearResults');
    clearResultsButton.click();
    expect(component.result).toEqual('');
  }));

  it('should calculate the multiplication of -5,6 as -30', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = -5;
    component.secondInputNumber = 6;
    component.operation = '*';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual(-30);
  }));
  
  /*Failures cases*/
    it('should fail if the first input is not a number', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 'a';
    component.secondInputNumber = 11;
    component.operation = '/';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual('Failed');
  }));
  
   it('should fail if the second input is not a number', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 22;
    component.secondInputNumber = 'b';
    component.operation = '/';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual('Failed');
  }));
  
   it('should fail if the operation is not among +-*/', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const component = fixture.debugElement.componentInstance;
    component.firstInputNumber = 22;
    component.secondInputNumber = 'b';
    component.operation = '/';
    let button = fixture.debugElement.nativeElement.querySelector('#populateResults');
    button.click();
    expect(component.result).toEqual('Invalid operation');
  }));

});
