// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 담을 수 있음
varA();
// console.log(varA);

let varB = function () {
  // 익명함수 -> 변수에 값으로 담김
  //   console.log("fincB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
