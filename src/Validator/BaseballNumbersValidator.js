import AppError from '../Error/AppError.js';

export default class BaseballNumbersValidator {
  static validateRange(baseballNumbers) {
    if (baseballNumbers < 111 && baseballNumbers > 999) {
      throw new AppError('잘못된 숫자 입력입니다.');
    }
  }

  static validateIsNum(baseballNumbers) {
    if (Number.isNaN(Number(baseballNumbers))) {
      throw new AppError('숫자만 입력해주세요.');
    }
  }

  static validateIsSpace(baseballNumbers) {
    if (baseballNumbers === '') {
      throw new AppError('공백은 입력 할 수 없습니다.');
    }
  }
}
