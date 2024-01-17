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
// 둘 중 하나만 true 일 경우 true.

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(0 || 1); // 1
console.log(false || 0 || {}); // 빈 객체데이터는 참이기 때문에 {} 반환
console.log(false || [] || null); // 빈 배열은 참이기 때문에 [] 반환 후 종료
console.log(false || null || []); // null : false
console.log(function () {} || undefined || ""); // 함수 데이터는 참이기 때문에 f () {} 반환 후 종료
console.log("" || false || 0 || NaN); // 모두가 거짓이라면 마지막 데이터가 반환

// ??: Nullish 병합 연산자
// || 연산자와 비슷하다
// null 또는 undefined는 제외하고 반환한다.

console.log(0 || 5);
console.log(0 ?? 5);
console.log(null ?? undefined);

const m = 0;

const num1 = m || 5;
console.log(num1); // 5
// or 연산자를 사용한 경우 처음으로 만나는 truthy 값을 반환한다.
// 0은 false로 평가되므로 5가 반환된다.
// 하지만 숫자 0의 데이터를 사용하고 싶을 땐?? = 0이라는 데이터를 넣고 싶을 때.

// Ternary 삼항 연산자
// 조건 ? 참일 때 반환 : 거짓일 때 반환

console.log(1 < 2 ? "참" : "거짓");

function isCat(name) {
  // name : now = 1 처럼 함수 내에서 변하는 값을 받아줄 변수가 들어가 있어야 함. 빈 괄호 안됨. 따라서 받아주는 변수(매개 변수)가 필요.
  return (
    // 조건 ? 참 : 거짓
    // 조건 : text === 'cat'
    name === "cat" ? "cat" : "not cat"
  );
}

isCat("cat");
console.log(isCat("cat"));
console.log(isCat("dog"));

// Spread 전개 연산자
// ...a, ...b
// ...rest 해서 다른 스타일을 가져오는 방식? 예를 들면 피그마에서 인스턴스 만드는 것 같은? 혹은 inherit? 상속 받아서 사용하는?

// 배열의 전개
const numA = [1, 2, 3];
const numB = [4, 5, 6];

// 전개 연산자 없이
console.log(numA.concat(numB));
// 전개 연산자 사용하여
console.log([...numA, ...numB]);

// 객체의 전개
const dog = {
  name: "puppy",
  phone: "090-0900-0999",
};
const dogInfo = {
  ...dog,
  age: 2,
};
console.log(dogInfo);

// 함수의 전개
// ...을 사용하여 파라미터(인수)를 전개할 수 있다.

// sum 함수 선언
function sum(a, b, c) {
  return a + b + c;
}
// function sum(a, b, c) {return a + b + c;}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6));

// 배열을 파라미터(인수)로 전달하려면?
const num3 = [5, 6, 7];
const num4 = [8, 9, 10];
console.log(sum(num3[0], num3[1], num3[2]));
console.log(sum(num4[0], num4[1], num4[2]));

// 전개 연산자로 바꾸어 작성하면?
console.log(...num3);
console.log(...num4);
