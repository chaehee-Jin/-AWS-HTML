 let numbers1= [1,2,3,4,5];
 let numbers2= [6,7,8,9,10];
 let numbers3= new Array();


 //concat은 서로 다른 배열2개를 합쳐서 새로운 배열을 만든다
 let numbers4 = numbers1.concat(numbers2);

console.log(numbers1);
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

function odd(num){
    return num % 2 != 0;

}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

let numbers6 = numbers4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i=0; i<numbers5.length; i++){
    console.log("i" + numbers5[i]);
}

for(let num of numbers5){
    console.log(`forEach: ${num}`)
}

// //java
// List<String> list = new Array<String>();
// list.forEach(n -> {});

numbers5.forEach( n => console.log(`ArrayforEach: ${n}`));

console.log(numbers5.indexOf(5));
console.log(numbers5.lastIndexOf(2));
console.log(numbers5.join(";"));
// push는 값 추가
console.log(numbers5.push(11));
console.log(numbers5)
// unshift는 첫번째 요소에  값을 추가 
console.log(numbers5.unshift(13));
console.log(numbers5)
//pop은 무조건 제일 끝에 있는 것을 제거함 
console.log(numbers5.pop());
console.log(numbers5)
// splice는 중간에 있는 것을 제거, 첫번째는 몇번 인덱스 , 두번째자리는 제거할 갯수를 의미
// 세번째자리부터는 제거를 하고 대신 추가되는 숫자를 의미 
// 제거와 추가를 동시에 할 수 있다, 배열도 추가 가능하다
console.log(numbers5.splice(2,1,15, 17));
console.log(numbers5)
// slice는 인덱스를 잘라내는 것, 데이터가 사라지는 것이 아니라 추출하는개념 
console.log(numbers5.slice(3, 6));
console.log(numbers5)

function compare(n1, n2){
    if( n1> n2) return 1;
    if( n1== n2) return 0;
    if( n1 < n2) return -1;

}
// sort는 compare을 넣어서 데이터를 재정렬 할 때 사용, compare을 사용하지 않으면 문자열로서의 sort를 해준것?

console.log(numbers5.sort(compare));
//reverse는 역정렬
console.log(numbers5.reverse())
//toString은 join과 같은 역할..?
//join은 배열을 연결해서 하나의 문자열로 만든다
console.log(numbers5.toString());

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
    history.back();
}