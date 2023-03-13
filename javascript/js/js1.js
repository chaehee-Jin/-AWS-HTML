// alert("알림창을 확인해주세요.");
// alert("두번째 알림창");
// alert(10 + 20);
console.log("println");
let flag = confirm("선택해주세요");
console.log(flag);
let name2 = prompt("이름을 입력해주세요.");
console.log(name2);

// console.log(test); //원래는 오류가 나야하지만 var과정을 쓴다면 대입과정에서 오류가 나지 않음 
let test = 10; // let은 변수의 재선언도 막음 bar대신 let을 써야하는 이유
console.log(test); // undefined는 자료형이 정해지지 않은것, 대입이 되지 않았다

let num1 = prompt("숫자 1");
let num2 = prompt("숫자 2");
console.log(num1+ num2);