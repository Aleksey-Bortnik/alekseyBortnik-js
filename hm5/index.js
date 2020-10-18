function taskOneOnClick() {
  let firstNumber = +document.getElementById("task-1-first-number").value;
  let secondNumber = +document.getElementById("task-1-second-number").value;
  let biggerNumber;
  let smallerNumber;

  if (firstNumber <= secondNumber) {
    biggerNumber = secondNumber;
    smallerNumber = firstNumber;
  } else {
    smallerNumber = secondNumber;
    biggerNumber = firstNumber;
  }

  let sum = 0;

  for (; smallerNumber <= biggerNumber; smallerNumber++) {
    sum += smallerNumber;
  }

  alert(sum);
}

