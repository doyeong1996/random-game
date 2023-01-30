//컴포넌트의 재사용성을 올리는 방법 중 많이 사용하는방법 (클린코드 + 리팩터링 = 위험성은 줄고 가독성은 증가 + 유지보수성 올라가는 코드)

const headerInput = document.querySelector(".header input");
const contentInput = document.querySelector(".content-form input");
const contentButton = document.querySelector(".content-form button");
const contentSpan = document.querySelector(".content-form span:last-child");
const result = document.querySelector(".result span");

function buttonClick(event) {
  //play 버튼이 눌러졌을경우 실행되는 함수
  event.preventDefault();
  const range = parseInt(headerInput.value);
  const userValue = parseInt(contentInput.value); //유저가 입력한 값
  const computerValue = Math.ceil(Math.random() * range); // 컴퓨터의 랜덤 값
  const values = { userValue, computerValue }; //입력받은 값들을 values라는 객체로 묶어주는건가 ?

  const resultComponent = createResultComponent(values); // values에 넣어놓은 값들을 createResultComponent ? 뭔지잘 모르겠다.
  contentSpan.innerText = resultComponent; // 아 이게 유저의 입력값이랑 컴퓨터의 랜덤값을 innerText에 표시

  const gameResult = getResult(values); // 게임의 결과를 ex) win || draw || lost 등을 innerText에 표시
  result.innerText = gameResult;
}

const createResultComponent = (result) => {
  const { userValue, computerValue } = result; //여기에서 왜 다시 values 를 다시 변수로 설정했을까? 지역변수라서?

  return `You Chise : ${userValue}, the Machine Chose : ${computerValue}`;
};

const getResult = (result) => {
  const { userValue, computerValue } = result; // 여기서도 다시 values를 다시 변수로 설정 값이 변경되지않으니 한번만 받아와서 쓸수없을까?

  if (computerValue < userValue) return `Win !`;
  if (computerValue === userValue) return `Draw !`;
};
