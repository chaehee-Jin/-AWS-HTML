/**
 * 1. 추가버튼 클릭시 input에 들어있는 value의 값을 list 에 추가
 * 2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 * 3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
 * 
 */
// document.getElementsByClassName("todo_text")[0].value;
const statusList = new Array();
const addButton  =document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].innerHTML += `
    <li><span class="todo-content">${todoText[0].value}</span> <button class="ok-button">확인</button></li>
    `;
    statusList.push(false);
    addEvent();

}
//이벤트를 계속 새롭게 추가 
function addEvent(){
    const okButton = document.getElementsByClassName("ok-button");
    const todoContent = document.getElementsByClassName("todo-content");
    for(let i=0; i< okButton.length; i++){
        okButton[i].onclick = () => {
            if(statusList[i]){ //이것자체가 true, false
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecoration = 'none';
                statusList[i] = false;

            }else{
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecoration = 'line-through';
                statusList[i] = true;

            }
        }
    }
}





// addEvent();
// function addEvent(){

// const addButton = document.getElementsByClassName("addbutton")

//     for(let i=0; i<todo-list.length; i++){
//         okbutton[i].onclick = () => {
//             todocontent[i].style.underline = "red";


//         }
//         okbutton[i].onclick = () => {
//             todocontent[i].style.color = "black"
//         }
//     }

// }