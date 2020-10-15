function taskOneCalculate() {
  const taskOneNumberInput = document.getElementById("task-1-number-input");
  const inputValue = +taskOneNumberInput.value;
  let resultText;
  if (inputValue < 0) {
    resultText = "Число отрицательное.";
  } else if (inputValue == 0) {
    resultText = "undefined is not a function";
  } else if (isNaN(inputValue)) {
    resultText = "Чувак, это не цифры...";
  } else {
    resultText = "Число положительное.";
  }
  const numberResultElement = document.getElementById("task-1-result");
  numberResultElement.innerText = resultText;
}

function taskTwoCheckBtn() {
  const taskTwoAgeInput = document.getElementById("task-2-age-input");
  const inputValue = +taskTwoAgeInput.value;
  let resultText;
  if (inputValue >= 0 && inputValue <= 120) {
    resultText = "Жив";
  } else {
    resultText = "ggwp";
  }
  const resultElement = document.getElementById("task-2-result");
  resultElement.innerText = resultText;
}

function taskThreeBtnOnClick() {
  const taskThreeNumberInput = document.getElementById("task-3-number-input");
  const inputValue = +taskThreeNumberInput.value;
  let resultText = Math.abs(inputValue);
  const resultElement = document.getElementById("task-3-result");
  resultElement.innerText = resultText;
}
