// TODO : TDD 코드 짜보기
export default class BallsBox {
  #BALLS_NUMBERS_SIZE = 3;
  ballArray;

  constructor(ballString) {
    this.validationDuplicate(ballString);
    this.validationRange(ballString);
    this.validationSize(ballString);
    this.ballArray = ballString.split("");
  }

  validationSize(ballString) {
    if (
      typeof ballString != "string" ||
      ballString.length !== this.#BALLS_NUMBERS_SIZE
    ) {
      throw new Error("[ERROR] 숫자는 3개를 입력해야합니다.");
    }
  }

  validationDuplicate(ballString) {
    if (ballString.length !== new Set(ballString).size) {
      throw new Error("[ERROR] 각 공의 숫자는 중복되지 않아야합니다.");
    }
  }

  validationRange(ballString) {
    if (!/^[1-9]+$/.test(ballString)) {
      throw new Error(
        "[ERROR] 각 공의 숫자는 1이상 9이하의 정수이어야만합니다."
      );
    }
  }
}
