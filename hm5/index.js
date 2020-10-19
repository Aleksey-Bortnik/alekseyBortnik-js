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
function taskTwoOnClick() {
  let divisible1 = +document.getElementById("task-2-first-number").value;
  let divisible2 = +document.getElementById("task-2-second-number").value;

  let dividers = [];

  for (
    let divider = 1;
    divider <= divisible1 && divider <= divisible2;
    divider++
  ) {
    if (divisible1 % divider === 0 && divisible2 % divider === 0) {
      dividers.push(divider);
    }
  }
  alert(dividers.pop());
}

function taskFourOnClick() {
  let taskNumber = +document.getElementById("task-4-number").value;
  let result = countDigits(taskNumber);
  alert(result);
}

function countDigits(n) {
  for (var i = 0; n > 1; i++) {
    n /= 10;
  }
  return i;
}
