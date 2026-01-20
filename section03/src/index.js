// const { add, sub } = require("./math");
// import mul from "./math.js";
import mul, { add, sub } from "./math.js"; // 확장자까지 작성

import randomColor from "randomcolor";
// 라이브러리에서 값을 가져올 때는 경로가 아닌 라이브러리의 이름만 명시

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
