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

// 호출 스케줄링

// setTimeout
// setTimeout은 일정 시간이 지난 후에 함수를 실행하는 함수이다.
// setTimeout(함수, 시간)

const timer = setTimeout(() => {
  console.log("hello");
}, 3000);

const btnStop = document.querySelector("#btnStop");
// btnStop.addEventListener(이벤트, 함수)
btnStop.addEventListener("click", () => {
  console.log("취소완료");
  clearTimeout(timer);
});

const timerSlide = setInterval(() => {
  console.log("지뢰찾기 슬라이드");
}, 3000);

const btnSlideStop = document.querySelector("#slideStop");
btnSlideStop.addEventListener("click", () => {
  console.log("slideStop");
  clearInterval(timerSlide);
});

// 콜백 함수
// 함수의 매개변수로 전달되는 함수를 콜백함수라고 한다.

const txtA = (f) => {
  // console.log(f);
  f();
  console.log("A");
};
const txtB = () => {
  console.log("B");
};

// txtA();
txtB();
// txtA("T");
txtA(txtB);

const sum3 = (a, b, c) => {
  // setTimeout(함수, 시간)
  setTimeout(() => {
    return c(a + b);
  }, 1000);
};

sum3(1, 2, (value) => {
  console.log(value);
});
// console.log(sum3(5, 7));

// call back

const txtA2 = (txtB2) => {
  txtB2();
  console.log("text A");
};
const txtB2 = () => {
  console.log("text B");
};

txtA2(txtB2); // 함수를 인수로서 집어 넣는 것이기 때문에 인수로 작성할 때는 괄호가 필요치 않음.
// txtB2();

// setTimeout
const sum4 = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 2000);
};

sum4(1, 5, (d) => {
  console.log(d);
});

// 그냥 셋타임아웃 하면 함수는 실행되었는데 값이 들어오는 건 시간을 미뤘기 때문에 언디파인드
// 따라서 이걸 해결하기 위해 console.log(함수)를 인수로 만들어서 전달하는 것으로 해결할 수 있고,
// console.log 를 c라는 인수로 전달함.

// console.log(sum4(1, 5));

// 재귀 함수
// 자기 자신을 호출하기 떄문에 무제한 호출, 따라서 종료 조건 붙여야 함.

let i = 0;

const aa = () => {
  console.log("aaa");
  i++;
  if (i < 5) {
    aa();
  }
};
aa();

const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (props) => {
  if (props.parent) {
    return getRootUser(props.parent);
  } else {
    return props;
  }
};
console.log(getRootUser(userD));
console.log(null);

// // 일반 함수는 호출 위치에 따라 this
// // 화살표 함수는 자신이 선언된 함수 범위에서 this가 결정

// const obj = {
//   name: "아메리카노",
//   price: 2500,
//   // front: function () {
//   front() {
//     return `${this.name}의 가격은 ${this.price}원입니다.`;
//   }, // 이걸 method라고 함
// };

// console.log(obj.front());

// function coffee() {
//   this.name = "푸라푸치노";
//   this.price = 6500;

//   return {
//     front: () => {
//       return `${this.name}의 가격은 ${this.price}원입니다.`;
//     },
//   };
// }

// const coffee = coffee();
// console.log(coffee.front());

// // const obj2 = {
// //   name: "라떼",
// //   price: 4000,
// //   front: () => {
// //     return `${this.name}의 가격은 ${this.price}원입니다.`;
// //   },
// // };

// console.log(obj2.front());

// 생성자 함수에서는 이름을 지을 때 대문자로 시작해야 함.
// 생성자 함수 : prototype, class
