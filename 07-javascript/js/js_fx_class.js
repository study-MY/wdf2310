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

function Front(name, price) {
  name;
}
Front.prototype.calling = function () {
  return `${this.name}의 가격은 ${this.price}입니다.`;
};
