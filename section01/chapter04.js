// 1. 변수
// 변수를 선언한다 -> let | 27은 해당 값으로 초기화 한다. | 초기값을 선언하지 않아도 된다.
let age;

age = 30;

// 2. 상수
// 상수는 변수와 달리 한번 저장된 값은 바꿀 수 없다. | 초기화가 반드시 필요함
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
