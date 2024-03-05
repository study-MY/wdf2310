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
