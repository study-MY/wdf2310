// 함수 선언하기

// 함수 선언문
// function 함수이름 () {}
// 함수 표현식
// const 함수이름 = function () {}

function greet() {
  console.log("안녕하세요! Hello! ");
}

const world = function () {
  console.log("세계? World!");
};

greet();
world();

// return
// return 이란 함수를 종료하고 값을 반환하는 것이다.
function h1() {
  return "Hello!";
  console.log("world");
  // return문 이후 작성된 코드는 실행되지 않는다.
}

h1();
console.log(h1());

function h2() {
  return;
  return "hello!"; // 이 코드는 실행되지 않는다.
}
h2();
console.log(h2());

// 매개변수
// 매개변수란 함수를 호출할 때 함수로 전달되는 값.

// function 함수이름 (매개변수 1, 매개변수 2) {}

function sum(a = 1, b = 2) {
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(7, 3));
console.log(sum(5));

// 객체의 구조분해 할당

// 일반적
const aaa = {
  name: "gs",
  age: 29,
  email: "abc@abc.abc",
  tall: 190,
};
console.log(aaa);

function printName(user) {
  return user.name;
}
console.log(printName(aaa));

const someone = [
  {
    name: "gs",
    age: 29,
    tall: 190,
  },
  {
    name: "hm",
    age: 15,
    tall: 174,
  },
  {
    name: "iy",
    age: 14,
    tall: 176,
  },
];
console.log(printName(someone[0]));

const printAge = (user) => {
  return user.email;
};
console.log(printAge(aaa));

// function getEmail({ name, age, email,}) {
//   let { name, age, email } = users;
//   return `${name}의 나이는 ${age}세 입니다. ${email}로 연락주세요.`;
// }
// console.log(getEmail(a));

// 함수 선언 (배열의 세번째 값 출력 함수)
const animals = ["cat", "dog", "snake", "bird", "elephant"];

// 세번째 반환
// function getThird(array) {
//   return array[2];
// }

// 배열 중 선택하여 출력, 기본값 설정
function getThird([, b = "두번째 요소가 없습니다."]) {
  //   const [a, b, c] = array;
  return `내가 좋아하는 동물은 ${b}입니다.`;
}
// 함수 호출
console.log(getThird(animals));

// 나머지 매개변수 (...rest)
// 매개변수를 배열로 전달받는다.
// function 함수이름 (...매개변수) {}

// function sum(...rest) {
//   return rest;
// }
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

function sum(a, b, ...rest) {
  console.log(a, b, rest);
}

sum(1, 2); // 1 2 []
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); // 1 2 [3, 4, 5, 6, 7, 8, 9]

// 배열 데이터의 숫자를 더하는 로직 함수
function sumAll(...rest) {
  console.log(rest);

  // return rest.reduce(function, 초기값)
  return rest.reduce(function (account, current) {
    return account + current;
  }, 0);
}
// 함수 안에 함수를 콜백한다 해서 콜백.
// 초기값이 0인 이유는 저 배열의 값을 초기값에 더해서 결과값을 받기 때문에.

sumAll(1, 2); // 1 2 []
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9); // 1 2 [3, 4, 5, 6, 7, 8, 9]

// 화살표 함수
// const 함수이름 = function () {}; 함수의 표현식

() => {}; // 매개변수가 없을 경우
// x => {}; // 매개변수가 없을 경우엔 소괄호 생략 가능. prettier에 의해 자동 수정되므로 주석처리.
(x, y) => {}; // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

const hello123 = () => {
  console.log(`안녕?! 나는 ' 입니다.`);
};

// hellog123("김토스트"); // 오류~

const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(1, 2));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};
// 2. 매개변수가 하나인 경우
// const b = x => {}
// 3. 매개변수가 여러 개인 경우
const c = (x, y) => {};
// 4. 함수의 리턴이 있는 경우
// const d = (x, y) => {return x + y};
// return 으로 시작하는 경우 중괄호, return 생략 가능
const d = (x, y) => x + y;

// 5. return으로 시작하지 않는 경우 중괄호 생략 불가

// 6. 객체를 반환하는 경우
// const f = (x) => {
//   return { a: x };
// };
const f = (x) => ({ a: x });

// 7. 배열을 반환하는 경우
// const g = () => {
//   return [1, 2];
// };
const g = () => [1, 2];

// 재귀 함수
// 자기 자신을 호출하기 떄문에 무제한 호출, 따라서 종료 조건 붙여야 함.
