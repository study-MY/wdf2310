// Destructuring assignment 구조 분해 할당
// 구조분해할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

// 배열의 구조 분해

const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // 배열의 구조분해 할당
const [a, b, c] = arr;

console.log(a, b, c);

// 각각의 변수가 미리 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;
// // 새 배열 입력 ~ // 필요하지 않은 변수 제거
const arr2 = [4, 5, 6];
[, e, f] = arr2;

console.log(e, f);

// 나머지 할당
const arr3 = [1, 2, 3, 4, 5];
const [g, h, ...rest] = arr3;

console.log(g, rest);
console.log(h, rest);
console.log(g, h, rest);

// 객체의 구조 분해
// ★★★ 많이 사용합니다! 기억합시다!

const myCat = {
  name: "gs",
  age: 29,
  hairColor: "white",
  guardian: "hm",
};
console.log(myCat.name, myCat.age);
console.log(`${myCat.name}은 ${myCat.age}세 입니다.`);

// 기본값 할당, 변수 이름 바꾸기
const { name: nick, age = 0, birth = "01/01" } = myCat;
console.log(name, age); // error
console.log(nick, birth); // gs 01/01

// Optional Chaining
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefined를 반환한다.

const user1 = null;
// console.log(user1);
// console.log(user1.name); // Error
console.log(user1?.name); // undefined

const userWinter = {
  name: "winter",
  age: 2,
  address: { city: "Busan", province: "Sasang", zipcode: "00002" },
};
const userFall = {
  name: "fall",
  age: 2,
};

function printCity(user) {
  return user.address?.city || "주소가 없습니다.";
}

console.log(printCity(userWinter));
console.log(printCity(userFall));
