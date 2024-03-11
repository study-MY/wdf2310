// console.log("슈렉프라푸치노");

// setTimeout(() => {
//   console.log("아메리카노");
//   console.log("아메리카노 제공");
// }, 3000);

// console.log("슈렉프라푸치노 제공");

// function orderCoffee(coffee, time) {
//   console.log(`${coffee}를 만드는 중입니다. ${time / 1000}초 소요됩니다.`);
//   setTimeout(() => {
//     console.log(`${coffee}가 만들어졌습니다.`);
//   }, `${time}`);
// }

// orderCoffee("아메리카노", 1000);
// orderCoffee("카페모카", 6000);
// orderCoffee("슈렉프라푸치노", 8000);

// 2. 콜백함수를 이용한 비동기 처리
function orderCoffee(coffee, callback) {
  console.log(`${coffee}를 만드는 중입니다.`);
  setTimeout(() => {
    console.log(`${coffee}이/가 만들어졌습니다.`);
    callback();
  }, 3000);
}
function drinkCoffee() {
  console.log(`커피를 마시는 중입니다.`);
}
function drinkCoffee2() {
  return `커피를 마시는 중입니다.`;
}

orderCoffee("아메리카노", drinkCoffee);
// 실행함수를 인자로 넣을 때는 괄호를 적지 않아도 된다.
// 괄호를 적는다는 것은 함수를 실행하겠다는 의미.

console.log(drinkCoffee2); // 함수 내용이 표시됨.
console.log(drinkCoffee2()); // 함수 결과가 표시됨.

// 3. 프로미스를 이용한 비동기 처리
const coffeeOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.975) {
      resolve("아메리카노 준비 완료");
    } else {
      reject("커피를 준비하지 못했습니다. 죄송합니다.");
    }
  }, 3000);
});

// 프로미스 객체 이용하기
coffeeOrder
  // 성공적으로 실행되었을 때
  .then((props) => {
    console.log(props);
  })
  // 실패했을 때
  .catch((error) => {
    console.log(error);
  });
