import BaseballNumbersValidator from '../Validator/BaseballNumbersValidator.js';

export default class BaseballNumbers {
  baseballNumbers;

  constructor(inputBaseballNumbers) {
    this.#validateBaseballNumbers(inputBaseballNumbers);
    this.baseballNumbers = inputBaseballNumbers;
  }

  #validateBaseballNumbers(inputBaseballNumbers) {
    BaseballNumbersValidator.validateIsNum(inputBaseballNumbers);
    BaseballNumbersValidator.validateIsSpace(inputBaseballNumbers);
    BaseballNumbersValidator.validateRange(inputBaseballNumbers);
  }
}
