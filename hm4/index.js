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
  const inputTime = {
    hours: +document.getElementById("task-4-hour-input").value,
    minutes: +document.getElementById("task-4-minutes-input").value,
    seconds: +document.getElementById("task-4-seconds-input").value,
  };

  let resultText;

  if (
    inputTime.hours >= 0 &&
    inputTime.hours <= 23 &&
    inputTime.minutes >= 0 &&
    inputTime.minutes <= 59 &&
    inputTime.seconds >= 0 &&
    inputTime.seconds <= 59
  ) {
    resultText = "Время валидное";
  } else {
    resultText = "Ошибка ввода";
  }

  const resultElement = document.getElementById("task-4-result");
  resultElement.innerText = resultText;
}

function taskFiveBtnOnClick() {
  const inputAxis = {
    x: +document.getElementById("task-5-x-input").value,
    y: +document.getElementById("task-5-y-input").value,
  };

  let xSign, ySign;
  if (inputAxis.x > 0) {
    xSign = "+";
  } else if (inputAxis.x === 0) {
    xSign = "0";
  } else {
    xSign = "-";
  }

  if (inputAxis.y > 0) {
    ySign = "+";
  } else if (inputAxis.y === 0) {
    ySign = "0";
  } else {
    ySign = "-";
  }

  const coordinatesSigns = xSign + ySign;

  let resultText;

  switch (coordinatesSigns) {
    case "++":
      resultText = "Точка находится в первой четверти.";
      break;
    case "+0":
      resultText = "Точка лежит на оси Х, в её положительной части.";
      break;
    case "+-":
      resultText = "Точка лежит в четвёртой четверти.";
      break;
    case "0+":
      resultText = "Точка лежит на оси Y, в её положительной части.";
      break;
    case "00":
      resultText = "Точка находится в начале координат.";
      break;
    case "0-":
      resultText = "Точка лежит на оси Y, в её отрицательной части.";
      break;
    case "-+":
      resultText = "Точка находится во второй четверти.";
      break;
    case "-0":
      resultText = "Точка лежит на оси Х, в её отрицательной части.";
      break;
    case "--":
      resultText = "Точка находится в третьей четверти.";
      break;
  }

  const numberResultElement = document.getElementById("task-5-result");
  numberResultElement.innerText = resultText;
}
