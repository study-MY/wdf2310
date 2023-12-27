// 코드

// 변수
// 데이터를 저장하고 사용하는 데이터의 이름

// var, let, const
// var : ES6 이전에 사용하던 변수. (현재는 잘 사용하지 않음.)

// 변수 선언
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// let 변수 (변수의 값을 변경할 수 있음.)

// 변수 선언
let c = 10;
console.log(c);
// 변수 값 변경
c = 20;
console.log(c);

// const 변수 (변수의 값을 변경할 수 없음.)
// 변수 선언
const d = 5;
console.log(d);

// 변수 값 변경 불가 확인
// d = 10;
console.log(d);
// TypeError : Assignment to constant variable.

// zero base numbering
// js는 배열의 index가 0부터 시작함.

const animals = ['개', '고양이', '물고기']

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
// ul li 등을 선언할 때.

// 주석 작성
// 한 줄 메모
/* 한 줄 메모 */

/**
* 여러 줄
* 메모1
* 메모2
*/

// 데이터 종류
// 문자열(string)
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현.

let myName = "JSUS";
// name은 예약어이기 때문에 변수로 사용할 수 없음.
// 예약어 : 스크립트 프로그램 자체에서 사용하겠다고 이미 선언된 언어.
let age = '00';

console.log(myName);
console.log(age);

console.log(`${myName}의 출생은 ${age}입니다.`);
// 팩틱기호? 1! 옆 자리 양식을 만든다?

// boolean (true, false)

let hungry = true;
let cold = false;

console.log(hungry);
console.log(cold);

// undefined
let undef;
let obj = {abc : 123};

console.log(obj . efg);
// null
// null은 의도적으로 비워둔 것.

// object (객체)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용.
// {key:Value}

let user = {
    // key: Value,
    name:"김가을",
    age: 1,
    cute: true,
}

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.cute);
console.log(`${user.name}의 나이는 ${user.age}살 입니다. ${user.name}은 ${user.cute ? "귀여워요." : "귀엽지않아요."}`)
