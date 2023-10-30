const blanksContainer = document.querySelector(".word-blanks");
const keys = document.querySelectorAll(".key");
const timeelement = document.querySelector(".time");
const randomFruit = fruitList[Math.floor(Math.random() * fruitList.length)];
console.log(randomFruit);
let blankElements;
let remainingTime = 60;
let hasPlayerWon = false;
let timerId;

for (let character of randomFruit) {
  const blankElement = document.createElement("span");
  blankElement.innerText = "_";
  blankElement.classList.add("blank");
  blankElement.setAttribute("data-id", character);
  blanksContainer.appendChild(blankElement);
}

keys.forEach((key, index) => {
  key.addEventListener("click", checkLetter);
});

function checkLetter(event) {
  event.target.classList.add("button-clicked");
  event.target.replaceWith(event.target.cloneNode(true));
  const letter = event.target.innerText;
  blankElements = document.querySelectorAll(".blank");
  blankElements.forEach((blankElement, index) => {
    const dataValue = blankElement.getAttribute("data-id");
    if (letter.toLowerCase() === dataValue) {
      blankElement.innerText = letter;
    }
  });
  checkStatus();
}

function checkStatus() {
  console.log(blankElements);
  const foundBlankElement = Array.from(blankElements).find(
    (blank) => blank.innerText === "_"
  );
  if (!foundBlankElement) {
    hasPlayerWon = true;
  }
  console.log(hasPlayerWon);
}

function countDown() {
  clearInterval(timerId);
  setInterval(() => {
    timeelement.innerHTML = `remaining time: <span>${remainingTime}</span>`;
    remainingTime--;
  }, 1000);
}
countDown();
