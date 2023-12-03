import { Random } from '@woowacourse/mission-utils';
import BaseballNumbers from '../Model/BaseballNumbers.js';
import InputView from '../View/InputView.js';

export default class BaseballGame {
  static async start() {
    const inputBaseballNumbers = await InputView.promptBaseballNumber();
    const baseballNumbers = new BaseballNumbers(inputBaseballNumbers);
  }
}
