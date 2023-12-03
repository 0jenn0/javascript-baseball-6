import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async promptBaseballNumber() {
    const inputBaseballNumbers =
      await Console.readLineAsync('숫자를 입력해주세요 : ');
    return inputBaseballNumbers;
  }
}
