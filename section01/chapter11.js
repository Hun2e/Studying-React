// 함수
let area1 = getArea(10, 20); // 인수
console.log(area1);

// 호이스팅
// -> 끌어올리다 라는 뜻

function getArea(width, height) {
  // 매개변수
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
}
