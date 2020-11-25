export default function BaseballGame() {
  const submitButton = document.body.querySelector("#submit");
  const userInput = document.body.querySelector("#user-input");

  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = {
      strike: 0,
      ball: 0,
      out: 0,
    };
    compareInput(result, computerInputNumbers, userInputNumbers);
    console.log(computerInputNumbers, userInputNumbers, result);
    return "결과 값 String";
  };

  const compareInput = (result, answer, userInput) => {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      answerNumberIndex >= 0
        ? answerNumberIndex === userIndex
          ? result.strike++
          : result.ball++
        : result.out++;
    }

    return result;
  };

  const makeOnAnswer = () => {
    const ALL_NUMBERS = 9;
    const numberArray = Array(ALL_NUMBERS)
      .fill()
      .map((v, i) => i + 1);
    let answer = "";

    for (let i = 1; i <= 3; i++) {
      const selectedNumber = numberArray.splice(
        selectRandomNumber(numberArray.length),
        1
      );
      answer += selectedNumber;
    }

    return answer;
  };

  const selectRandomNumber = (length) => {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  };

  const submitUserInput = (answer) => {
    if (isInputRight()) {
      return this.play(answer, userInput.value);
    }
  };

  const isInputRight = () => {
    const { value } = userInput;

    if (value.match(/[^1-9]/g)) return alert("숫자가 아닙니다.");
    if (value.length !== new Set(value).size) {
      return alert("숫자가 중복됩니다.");
    }
    if (value.length !== 3) return alert("3자리의 숫자를 입력해주세요.");

    return true;
  };

  const gameStart = () => {
    const answer = makeOnAnswer();
    const boundSubmitUserInput = submitUserInput.bind(null, answer);
    submitButton.addEventListener("click", boundSubmitUserInput);
  };

  gameStart();
}

new BaseballGame();
