class MovePossibilityCheck {
  static checkToLeft = (field: number[][]) => {
    for (let j = 0; j <= 4; j++) {
      for (let i = 0; i <= 4; i++) {
        if (field[j][i]) {
          if (field[j][i] === field[j][i - 1] || field[j][i - 1] === 0) {
            return true;
          }
        }
      }
    }
    return false;
  };

  static checkToRight = (field: number[][]) => {
    for (let j = 0; j <= 4; j++) {
      for (let i = 4; i >= 0; i--) {
        if (field[j][i]) {
          if (field[j][i] === field[j][i + 1] || field[j][i + 1] === 0) {
            return true;
          }
        }
      }
    }
    return false;
  };

  static checkToUp = (field: number[][]) => {
    for (let i = 0; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        if (field[j][i]) {
          if (field[j - 1][i] === 0 || field[j][i] === field[j - 1][i]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  static checkToDown = (field: number[][]) => {
    for (let i = 0; i <= 4; i++) {
      for (let j = 3; j >= 0; j--) {
        if (field[j][i]) {
          console.log(field[j + 1][i]);
          if (field[j][i] === field[j + 1][i] || field[j + 1][i] === 0) {
            return true;
          }
        }
      }
    }
    return false;
  };

  static checkAll = (field: number[][]) => {
    return [
      MovePossibilityCheck.checkToLeft(field),
      MovePossibilityCheck.checkToRight(field),
      MovePossibilityCheck.checkToUp(field),
      MovePossibilityCheck.checkToDown(field),
    ];
  };
}

export default MovePossibilityCheck;
