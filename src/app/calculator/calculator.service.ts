import { Injectable } from '@angular/core';

@Injectable()

/**
* Represents the calculatorservice.
* @constructor: the default one will be used
*/
export class CalculatorService {
  /**
  * Represents the calculate.
  * @param {number} i -  represents first user entered number.
  * @param {number} j - represents first user entered number.
  * @param {string} operator - represents first user entered number.
  * @returns {number} result - represents first user entered number.
  */
  calculate(i,j,operator) {
    /*
    * We can use eval() to calculate the below mathematical calculations. But keeping an idea to support more complex
    * calculations like Sin, Cos etc. So performing individual operations seperately.
    * We can even have http service rest service calls to fetch for complex requirements.
    */
    var result;
         if(operator == '+') {
            result = i + j;
          } else if(operator == '-') {
            result = i - j;
          } else if(operator == '*') {
            result = i * j;
          } else if(operator == '/'){
            result = i / j;
          }
    return result;
    }
}
