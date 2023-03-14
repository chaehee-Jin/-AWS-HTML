
window.onload = () =>{

}

function a(){
    console.log("a 함수 호출");
}

a();

console.log(typeof a);

//화살표 함수 => = function
let b = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행");
    f();
}
//callback함수,비동의처리를 할때 사용
b(a); //b(a()) ->함수 호출
b(function(){console.log("test")});

//즉시실행 함수 , 정의와 동시에 실행 
(function(){console.log("test2")}());