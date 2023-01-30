const headerInput = document.querySelector(".header input");
const contentInput = document.querySelector(".content-form input");
const contentButton = document.querySelector(".content-form button");
const contentSpan = document.querySelector(".content-form span:last-child");
const result = document.querySelector(".result span");

function buttonClick(event) {
  event.preventDefault();
  const range = parseInt(headerInput.value); //입력받은 값을 숫자로 형변환
  const user = parseInt(contentInput.value); //입력받은 값을 숫자로 형변환
  const random = Math.ceil(Math.random() * range); // tyepof 숫자
  contentSpan.innerText = `You Chose : ${user}, the Machine Chose : ${random}.`;

  if (random < user) {
    result.innerHTML = `Win !`; // 이겼을 경우
  } else if (random === user) {
    result.innerHTML = `Draw !`; // 비겼을 경우
  } else {
    result.innerHTML = `Lost !`; // 졌을 경우
  }
}

contentButton.addEventListener("click", buttonClick);
