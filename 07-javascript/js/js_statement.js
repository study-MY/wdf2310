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
// ★★★
// 많이 사용합니다! 기억합시다!

const myCat = {
  name: "gs",
  age: 29,
  hairColor: "white",
  guardian: "hm",
};
console.log(myCat.name, myCat.age);
console.log(`${myCat.name}은 ${myCat.age}세 입니다.`);

// 객체의 구조분해 복습
const airbnbIcon = {
  img: "airbnb.png",
  text: "한옥",
};
console.log(airbnbIcon.img, airbnbIcon.text); // img src="airbnbIcon.img", <a>한옥</a>
const { img, text } = airbnbIcon;
console.log(img, text);
// 이거

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

// 조건문
// // if 문
// if (조건) {
//   // 조건이 true일 때 실행되는 코드
// }

// // if else 문
// if (조건) {
//   // 조건이 true일 때 실행되는 코드
// } else {
//   // 조건이 false일 때 실행되는 코드
// }

// // if else if if문
// if (조건1) {
//   // 조건1이 true일 때 실행되는 코드
// } else if (조건2) {
//   // 조건2가 true일 때 실행되는 코드
// } else {
//   // 조건이 false일 때 실행되는 코드
// }

// 음수, 양수 판별 함수
// 함수 선언
// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   } else if (num < 0) {
//     return false;
//   } else {
//     return "0입니다.";
//   }
// }
function isPositive(num) {
  if (num > 0) {
    console.log(`${num} is Positive Number`);
  } else if (num < 0) {
    console.log(num + " is Negative Number");
  } else {
    console.log(`${num} is Zero`);
  }
}

// 함수 실행
isPositive(-76);
isPositive(127);

// switch 문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.

// switch (매개변수) {
//   case 값1 :
//     // 매개변수 === 값1 일 때 실행되는 코드
//     break;
//   case 값2 :
//     // 매개변수 === 값2 일 때 실행되는 코드
//     break;
//   default:
//     // 매개변수와 일치하는 case문이 없을 때 실행되는 코드
// }

function getPrice(item) {
  let price;
  switch (item) {
    case "패딩":
      price = "280,000";
      break;
    case "바지":
      price = "55,000";
      break;
    default:
      price = "아이템 별로 상이함";
  }
  return item + "의 가격은 " + price + "입니다.";
}
console.log(getPrice("스웨터"));
console.log(getPrice("패딩"));
console.log(getPrice("티셔츠"));

function getPrice2(item) {
  switch (item) {
    case "패딩":
      return "280,000";
    // return이란 함수를 종료하고 값을 반환하는 것이고,
    // return을 사용하면 break를 사용하지 않아도 된다.
    case "바지":
      return "55,000";
    default:
      return "아이템 별로 상이함";
  }
}

console.log(getPrice2("패딩"));
console.log(getPrice2("바지"));
console.log(getPrice2("모자"));
console.log(getPrice2("신발"));

//if 문으로 바꾸기
function getPrice3(item) {
  if (item === "패딩") return "280,000";
  if (item === "바지") return "55,000";
  return "아이템 별로 상이함";
}
console.log(getPrice3("패딩"));
// ===은 완전 일치니까 검색에 있어서는 이걸 사용 못하잖아? 그럼 검색어 자동수정이나 한영 바뀌거나 비슷한 카테고리 묶어서 검색시켜주는 건 어떻게?

// 반복문
// 반복문이란 특정 코드를 반복적으로 실행할 때 사용.

// for 문
// for (초기화; 조건; 증감) {실행될 코드}
// ★★★
// 반복문을 쓰는 이유? 예: 에어비앤비, 배열에 있는 객체의 갯수만큼

// 초기화 시 변수는 i를 많이 사용.

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// i = i+1
// i += i
// i++

// break 문
for (let i = 10; i > 0; i--) {
  if (i <= 3) {
    break;
  }
  // i가 3이하일 때 (혹은 4보다 작을 때)
  // 전체 반복문을 종료한다.
  console.log(i);
}

// continue 문 : 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    continue;
  }
  // continue : 조건에 해당하는 걸 버리고 간다..!
  console.log(i);
}

// for of 문
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

const animals = ["leopard", "cat", "girin"];
console.log(animals);
console.log(animals.length);
console.log(animals[0], animals[1], animals[2]);
for (let i = 0; i < animals.length; i++) {
  console.log(i);
  console.log(animals[i]);
}

// for of 문
// for (매개?변수 of 배열) {실행될 코드}
for (let animal of animals) {
  console.log(animal);
}

// ex 2
const users = [
  {
    name: "winter",
    age: 2,
  },
  {
    name: "fall",
    age: 3,
  },
  {
    name: "summer",
    age: 4,
  },
];
console.log(users);
console.log(users.name);
console.log(users[0].name);

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  console.log(users[i].name);
}

for (let user of users) {
  console.log(user.name);
}
