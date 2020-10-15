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

function taskFourBtnOnClick() {
  const inputDate = {
    hours: +document.getElementById("task-4-hour-input").value,
    minutes: +document.getElementById("task-4-minutes-input").value,
    seconds: +document.getElementById("task-4-seconds-input").value,
  };

  let resultText;

  if (
    inputDate.hours >= 0 &&
    inputDate.hours <= 23 &&
    inputDate.minutes >= 0 &&
    inputDate.minutes <= 59 &&
    inputDate.seconds >= 0 &&
    inputDate.seconds <= 59
  ) {
    resultText = "Время валидное";
  } else {
    resultText = "Ошибка ввода";
  }

  const resultElement = document.getElementById("task-4-result");
  resultElement.innerText = resultText;
}
