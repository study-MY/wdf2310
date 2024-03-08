// const arrAnimals = ["dog", "cat", "elephant"];
// const animals = new animals("dog", "cat", "elephant");

const size = ["tall", "Grande", "Venti"];
const americano = {
  name: "아메리카노",
  price: 4100,
  front: function () {
    return `${this.name}의 가격은 ${this.price}입니다.`;
  },
};
console.log(americano.front());

const latte = {
  name: "라떼",
  price: 4600,
  //   front: function () {
  //     return `${this.name}의 가격은 ${this.price}입니다.`;
  //   },
};
console.log(americano.front.call(latte));

// 프로토타입을 이용한 메소드 재활용
function Front(name, price) {
  this.name = name; // ex. this.name = 아메리카노
  this.price = price; // ex. this. price = 4000
}
// Front.prototype.calling = function () {
//   return `${this.name}의 가격은 ${this.price}입니다.`;
// };

// Front 생성자 함수를 이용한 객체 생성
const a = new Front("아메리카노", 4000);
const l = new Front("라떼", 4600);
console.log(a);
// console.log(a.calling());
// console.log(l.calling());

class Front2 {
  constructor(name, price, size, count = 1) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.count = count;
  }
  makeCoffe() {
    return `${this.name} ${this.size} ${this.count}잔 주문 들어옴.`;
  }
  getPrice() {
    if (this.size === "venti") {
      return this.price + 500 * 2;
    } else if (this.size === "grande") {
      return this.price + 500;
    }
    return this.price;
  }
  calling() {
    return `${this.size} ${this.name}의 가격은 ${this.getPrice()}입니다.`;
  }
}

// extends 상속 시켜 사용하기
class Special extends Front2() {
  specialCoffee() {
    return `오늘의 커피: ${this.size} ${
      this.name
    }의 가격은 ${this.getPrice()}입니다.`;
  }
}

const a2 = new Front2("아메리카노", 4000, "grande");
const l2 = new Front2("라떼", 4600, "tall");
const milktea = new Front2("밀크티", 6000, "tall");

console.log(l2.makeCoffe());
console.log(a2.getPrice());
console.log(a2.calling());
