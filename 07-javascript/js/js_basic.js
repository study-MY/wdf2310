// js기본
console.log("Hello, world?");

// String(문자)
const wc = "My sweet white cat";
console.log(wc);
console.log(`Hello, ${wc}?`);

// Number(숫자)
// 따옴표를 붙이지 않으면 숫자로 인식한다.

console.log(123);
console.log(1 + 2);
console.log("1" + 2);
console.log("1" + "2");
console.log("1 + 2");
// 위와 같은 이유로 px단위를 입력할 때는 따옴표를 사용해야만 합니다.

const b = -123;
const c = 1.23;
console.log(b + 100, c * 2);

// 숫자로 변환
const d = 0.1;
const e = 0.2;
console.log(d + e); // 부동 소수점 방식으로
console.log((d + e).toFixed(5)); // string
console.log(typeof (d + e).toFixed(5)); // 데이터 유형을 표시하겠다
console.log(Number((d + e).toFixed(5))); // 숫자로 바꾸겠다.

// Boolean(참/거짓)
const f = true;
const g = false;

if (g) {
  console.log(true);
}
// if(f) : true
// if(g) : nothing

// null, undefined
// null : 값이 없다.
// undefined : 값이 할당되지 않았다.

let age = null;
console.log(age);
age = 4000;
console.log(age);

let height;
console.log(height);
height = 190;
console.log(height);

// Array(배열)
// 여러개의 값을 순차적으로 나열한 자료형

const animals = ["cat", "dog", "rabbit"];
console.log(animals);
console.log(animals[0]);
console.log(animals[1], animals[2]);
console.log(animals[2]);
console.log(animals.length);
// 배열의 마지막 요소를 가져온다.
console.log(animals[animals.length - 1]);
