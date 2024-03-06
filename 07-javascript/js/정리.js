// 5. 배열

const starbucks = ["Americano", "Latte", "Dolce Latte"];

console.log(starbucks[0]);
console.log(starbucks[2]);
console.log(starbucks.length);

// {'tall', 'grande', 'venti'}
const starbucksMenu = {
  name: "Americano",
  price: 4100,
  size: "tall",
};

console.log(starbucksMenu.price);
console.log(starbucksMenu["size"]);

const userA = {
  name: "A",
  age: 40,
};
const userB = {
  name: "B",
  age: 5,
  parent: userA,
};

console.log(userB);
console.log(userA.name);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

const users = [userA, userB];
const userData = [
  { name: "A", age: 40 },
  { name: "B", age: 5, parent: userA },
];

console.log(userData[0].name);
console.log(userData[1].age);

const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(arr[0], arr[1], arr[2]);
console.log(a, b, c);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const [x, y, ...rest] = arr2;

console.log(arr2);
console.log(x);
console.log(y);
console.log(...rest);

const obj = {
  //   name: "A",
  age: 20,
  //   height: 180,
};
const { name = "이름없음", age, height: h = "키 정보 없음" } = obj;
console.log(obj.name, obj.age, obj.height);
console.log(name, age, h);

// 선택적 체이닝
const user1 = {
  name: "Ace",
  age: 18,
};
const user2 = {
  name: "Samuel",
  age: 19,
  address: "Nameless City",
};

function printCity(props) {
  return props.address || "주소 없음";
}
console.log(printCity(user1));
console.log(printCity(user2));

function isPositive(props) {
  if (props > 0) {
    return "양수입니다.";
  } else if (props < 0) {
    return "음수입니다";
  } else {
    return "0 입니다.";
  }
}

console.log(isPositive(3));
console.log(isPositive(-3));

// switch
function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍!";
    case "고양이":
      return "야옹~";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "알 수 없음";
  }
}

console.log(getSound("사자"));

// if 문으로 바꾸기
function getSound2(props) {
  if (props === "개") return "멍멍!";
  if (props === "고양이") return "야옹~";
  if (props === "참새") return "짹짹";
  if (props === "비둘기") return "구구 구 구";
  return "알 수 없음";
}
console.log(getSound2("개"));
console.log(getSound2("인간"));

const cats = [
  {
    name: "여름",
    age: 3,
  },
  {
    name: "가을",
    age: 2,
  },
  {
    name: "겨울",
    age: 1,
  },
];

for (let cat of cats) {
  console.log(`${cat.name}의 나이는 ${cat.age}입니다.`);
}

console.log(`${cats[0].name}의 나이는 ${cats[0].age}입니다.`);
console.log(`${cats[1].name}의 나이는 ${cats[1].age}입니다.`);

for (i = 0; i < cats.length; i++) {
  console.log(`${cats[i].name}의 나이는 ${cats[i].age}입니다.`);
}

hello();
function hello() {
  console.log("안녕하세요 선언식입니다.");
}

const hello2 = function () {
  return "안녕하세요 표현식입니다.";
};
console.log(hello2());
hello2();

function sum(x = 12, y = 7) {
  return x + y;
}

console.log(sum(5, 7));
console.log(sum(7));
console.log(sum());

// 함수 내에서 구조분해할당
const userC = {
  name: "치즈",
  age: 2,
  email: "",
};

function getName({ name, age, email = "없음" }) {
  // const {name, age} = props;
  // return props.name;
  return `${name}의 나이는 ${age}세 입니다. 이메일은 ${email}입니다.`;
}
console.log(getName(userC));

const grade1 = ["yuji", "nobara", "megumi"];
function get2([a, b = "student2", c, ...rest]) {
  // const [a, b, c, ...rest] = props;
  // return props[1];
  return b;
}
console.log(get2(grade1));

function sum4(...rest) {
  return rest;
}
console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));

const arrow = (x, y) => {
  return x + y;
};
console.log(arrow(1, 2));

const sum3 = (x, y) => x + y;
console.log(sum3(2, 3));

// 화살표 함수의 다양한 예시
// 매개 변수가 없는 경우
const aa = () => {};
// 매개변수가 하나인 경우
// const bb = x => {} : prettier의 자동 소괄호 추가로 주석처리함.
// 매개변수가 여러개인 경우
const cc = (x, y) => {};

// 함수에 return이 있는 경우
const d = (x) => {
  return x;
};
console.log(d(5));
// 축약된 형태 return 생략
const e = (x) => x;
const f = (x, y) => x + y;
// return키워드로 시작하지 않는 경우
// 생략할 수 없음.
const ff = (x, y) => {
  console.log(x + y);
  return x + y;
};
// 객체 데이터를 반환한는 경우
const gg = () => {
  return { a: 1, b: 2 };
};

// const hh = () => (a: 1, b: 2)
// 객체의 중괄호와 화살표 함수의 중괄호를 구분하기 위해 소괄호를 사용

const ii = () => [1, 2, 3];
