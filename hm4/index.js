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
