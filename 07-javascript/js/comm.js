// 코드

// 변수
// 데이터를 저장하고 사용하는 데이터의 이름

// var, let, const
// var : ES6 이전에 사용하던 변수. (현재는 잘 사용하지 않음.)
// var는 재할당이 가능. 그렇게 되면 가장 마지막에 적힌 코드가 적용되기 때문에 오류가 많이 발생. 예를 들면 스와이퍼 1을 만들고 스와이퍼 2를 만들었을 때 스와이퍼 2가 1에 적용되어 오류가 생긴다던가.

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

// 배열(Array)
// 여러 데이터를 순서대로 저장하기 위해 사용

let fruits = ['바나나', 'Apple', '체리'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 예약어
// this 자신, if, break

// 함수(Function)
// 특정 기능을 수행하는 코드의 집합

// 함수 선언
function sayHello() {
    // 함수 내용
    console.log('Hello!');
}

// 함수 호출
sayHello();
sayHello();

// 함수 내보내기
// return 내보내기

function returnFunc() {
    return 123;
};
let f = returnFunc();
console.log(f);

// 함수의 재사용
// 예: 국어, 수학 점수를 전달하면 총점을 계산해주는 함수

// 1 함수 선언
// function get();으로 일단 값을 받을 건데 이건 나중에.
function sum(a, b) {
    // a, b는 매개변수(Parameters)
    return a + b;
}
// 2 함수 호출
sum(88, 76);
console.log(sum(88, 76));
console.log(sum(70, 80));
console.log(sum(60, 60));

let ab = sum(20, 30);
console.log(ab);

// 기명함수 (Named Function)
function hello() {
    console.log(`Hello! 나는 ${myName}이야!`);
};
hello();

// 익명함수 (Anonymous Function)
let hello2 = function() {
    console.log(`Nice to meet you!`)
};
hello2();

// 화살표 함수 (Arrow Function)
let hello3 = () => {
    console.log('hello3')
};
// ()매개변수
// {}실행

hello3();

// 조건문 (if, else)
// 특정 조건에 따라 다른 코드를 실행할 때 사용
// 참과 거짓일 때의 조건을 모두 집어넣고 싶다면 if else

// if (조건) {참일 경우 실행문} else {거짓일 경우 실행문}
let isShow = true;
let checked = false;
// false면 실행되지 않음.

if(isShow) {console.log('Show!')};
if(checked) {console.log('Checked!');}

if(true) {
    console.log('true');
} else {
    console.log('false')
}

// DOM API
// Document Object Model, Application Programming Interface

// HTML 요소 (Element) 검색

const boxEl = document.querySelector('.box')
// class 값이 box인 텍스트 검색에 가까움.
// 데이터 검색이 아님.

// boxEl를 클릭했을 때, 할 일을 함수로 정의
boxEl.addEventListener('click',function () {
    console.log('Click');
    // boxEl 요소에 active 클래스 추가
    boxEl.classList.add('active')
});
// 이벤트Event가 발생add하는 지 듣고 있도록Listener
// ("click",function () {}) = (Event : 상황,  Handler : 무엇을 실행할지 )

const tabEls = document.querySelectorAll('.tab');
console.log(tabEls);

tabEls.forEach(function (tabEl, index) {
    tabEl.classList.add(`tab-${index + 1}`);
    console.log(tabEl, index);
});
