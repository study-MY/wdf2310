// operator : 연산자

// Arithmetic 산술 연산자
// +, -, *, /, %(나머지 연산자), **(거듭제곱)

// 덧셈 연산자
console.log(1 + 2);
console.log("가을" + "겨울");

// 뺄셈 연산자
console.log(5 - 3);

// 곱셈 연산자
console.log(5 * 7);

// 나눗셈 연산자
console.log(29 / 15);

// 나머지 연산자
console.log(29 % 15);
// 나머지가 0이면 짝수, 1이면 홀수
// (now % 슬라이드의 갯수) 나머지가 0일경우 마지막 슬라이드이다.

// 짝홀수 판별 함수
// 함수 선언
function isEven(num) {
  return num % 2 === 0;
}
// 함수 호출
isEven();
console.log(isEven(1)); // false
console.log(isEven(2)); // true

// // 거듭제곱 연산자
// console.log(29**2);
// console.log(29 ^ 2); ?

// Assignment 할당 연산자
let now = 1;
console.log(now);

now = now + 1;
// now에 1을 더한 값을 now에 할당.
console.log(now);

now += 1;
// 'now = now + 1;' = 'now += 1;'
console.log(now);

let c = 7;
console.log(c);
c = c * 2;
console.log(c);
c *= 2;
console.log(c);

// Increment & Decrement 증감 연산자

// Negation 부정 연산자
// !를 사용하여 true를 false로, false를 true로 바꿀 수 있다.

console.log(!true);
console.log(!false);

console.log(0);
console.log(!0);
console.log(!!0);
console.log(!!!0);

console.log([]);
console.log(![]);
console.log({});
console.log(!{});

console.log(function () {});
console.log(!function () {});
console.log(isEven());
console.log(!isEven());

// comparison 비교 연산자
// ===, !==, <, >, <=, >=
// ==(동등), !=(부동)는 사용하지 않는 것이 좋다. (형 변환이 일어나 정확한 비교가 불가능하기 때문)
// !==불일치

// 일치 연산자
console.log(1 === 1);
console.log(1 === "1");

// 불일치 연산자 (형변환 X)
console.log(1 !== 1);
console.log(1 !== "1");

// 대소 비교 연사자 (형변환 O)
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

// Logical 논리 연산자
// And : && : 둘 다 참이면 반환. 거짓인 경우 처음 만나는 거짓 반환.
// 둘 다 true일 경우 true

console.log(true && true);
console.log(true && false);

console.log(1 < 2 && 2 < 3);
console.log(true && false && true);
console.log(1 && 0 && 1);
console.log(1 && 2 && 0);
console.log(1 && 0 && false);

console.log("a" && "b" && "");
console.log("a" && "b" && "c");

// Or : || : 둘 중 하나만 참이면 반환. 가장 먼저 만나는 참 반환.
// 둘 중 하나만 true 일 경우 true

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // 빈 객체데이터는 참이기 때문에 {} 반환
console.log(false || [] || null); // 빈 배열은 참이기 때문에 [] 반환 후 종료
console.log(false || null || []); // null : false
console.log(function () {} || undefined || ""); // 함수 데이터는 참이기 때문에 f () {} 반환 후 종료
console.log(false || 0 || NaN); // 모두가 거짓이라면 마지막 데이터가 반환

// Nullish 병합 연산자
const m = 0;

const num1 = m || 5;
console.log(num1); // 5
// or 연산자를 사용한 경우 처음으로 만나는 truthy 값을 반환한다.
// 0은 false로 평가되므로 5가 반환된다.
// 하지만 숫자 0의 데이터를 사용하고 싶을 땐?? = 0이라는 데이터를 넣고 싶을 때.
