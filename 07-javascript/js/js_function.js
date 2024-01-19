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
const a = {
  name: "gs",
  age: 29,
  email: "abc@abc.abc",
  tall: 190,
};
console.log(a);

function printName(user) {
  return user.name;
}
console.log(printName(a));

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
console.log(printAge(a));

// function getEmail({ name, age, email,}) {
//   let { name, age, email } = users;
//   return `${name}의 나이는 ${age}세 입니다. ${email}로 연락주세요.`;
// }
// console.log(getEmail(a));

const animals = ["cat", "dog", "snake", "bird", "elephant"];
// 함수 선언 (배열의 세번째 값 출력 함수)
// function getThird(array) {
//   return array[2];
// }
function getThird([, b]) {
  //   const [a, b, c] = array;
  return `내가 좋아하는 동물은 ${b}입니다.`;
}
// 함수 호출
console.log(getThird(animals));
