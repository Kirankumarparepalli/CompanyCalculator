import { Injectable } from '@angular/core';

@Injectable()

export class CalculatorService {
  calculate(a,b,operator) {
    var total;
         if(operator == '+') {
            total = a + b;
          } else if(operator == '-') {
            total = a - b;
          } else if(operator == '*') {
            total = a * b;
          } else if(operator == '/'){
            total = a / b;
          }
    return total;
    }
}
