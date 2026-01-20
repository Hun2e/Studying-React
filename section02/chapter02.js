function returnFalse() {
  console.log("Flase 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

// and, or 앞의 함수가 False, True이기에 뒤의 함수는 호출을 하지 않음 -> 단락평가

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "임채훈" });

// Truthy 한 값이 and연산으로 2개가 주어진다면 2번째 값이 저장됨
