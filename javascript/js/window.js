// location.href = "https://www.naver.com"; //무조건 호출만 되면 페이지 이동
const naverButton = document.getElementsByTagName("button");
naverButton[0].onclick = () => {
    //href는 뒤로 가기 가능, 기록이 저장됨 
    //location.href = "https://www.naver.com";
    //replace는 뒤로가기 불가능, 기록이 저장되지 않음 
    location.replace("https://www.naver.com");
}
naverButton[1].onclick = () => {
    location.href = "http://127.0.0.1:5500/javascript/array.html"
}
//버튼이 여러개일 수 있기때문에 리스트로 가지고옴 

