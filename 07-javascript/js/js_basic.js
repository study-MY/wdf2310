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
// [값, value, 값, value ...]

const animals = ["cat", "dog", "rabbit"];
console.log(animals);
console.log(animals[0]);
console.log(animals[1], animals[2]);
console.log(animals[2]);
console.log(animals.length);
// 배열의 마지막 요소를 가져온다.
console.log(animals[animals.length - 1]);

// Object(객체)
// 여러 개의 값을 {key: value} 형태로 저장한 자료형
// {이름 : 값, key : value} property

const user = {
  name: "gs",
  age: 29,
};

console.log(user);
console.log(user.name, user.age);
console.log(`${user.name}의 나이는 ${user.age}입니다.`);
console.log(user.name + "의 나이는 " + user.age + "입니다.");

// 점 표기법
console.log(user.name, user.age);

// 대괄호 표기법
console.log(user["name"], user["age"]);

// ex
const userA = {
  name: "gs",
  age: 29,
};
const userB = {
  name: "hm",
  age: 15,
  parent: userA,
};
console.log(userB);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

// 배열에 객체 넣기
const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0]["name"]);

// function 함수
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형

// 함수 선언식 (기명함수)
// function 함수이름 (매개변수) {코드}

function printHello() {
  console.log("안녕하세요?");
}

printHello();
function getNumber() {
  return 123;
}
console.log(getNumber);
console.log(getNumber, typeof getNumber);
console.log(getNumber(), typeof getNumber);

// Type Conversions (형 변환)
const h = 1;
const i = "1";
console.log(h == i); // 동등 연산자 : 값만 비교. 형변환이 일어남. // true
console.log(h === i); // 일치 연산자 : 값과 타입을 비교. 데이터 유형까지 일치여부를 확인함. 형변환이 일어나지 않음. // false

// truthy(참 같은 값) & falsy (거짓 같은 값)
// false, 0, '', null, undefined, NaN

const j = 0;
if (j) {
  console.log("참입니다.");
} else {
  console.log("거짓입니다.");
}
