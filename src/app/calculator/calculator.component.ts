import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})
export class CalculatorComponent {
  firstInputNumber: any;
  secondInputNumber: any;
  result: any;
  operation: any;
  constructor(private calculatorService: CalculatorService) {
    this.initializeValues();
  }

  initializeValues(){
      this.firstInputNumber ='';
      this.operation = '';
      this.secondInputNumber = '';
      this.result = '';
  }

  /*
    This function will call the service and populate the value in the result value
  */
  populateResults() {
      var firstValue = Number(this.firstInputNumber);
      var secondValue = Number(this.secondInputNumber);
      var operatorValue = this.operation;

      /*calling service*/
      var total = this.calculatorService.calculate(firstValue, secondValue, operatorValue);

    /* Setting it to result model variable to bind the result to UI */
      this.result = total;
  }

  clearResults(){
    this.initializeValues();
  }
}
