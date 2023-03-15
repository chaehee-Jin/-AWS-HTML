
const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type=checkbox" class="ok-check> <span class="todo-content"> ${todoText[0].value}</spen>`;
    todoList[0].appendChild(li);
    addEvent();

}
//이벤트를 계속 새롭게 추가 
function addEvent() {
    const okCheck = document.getElementsByClassName("ok-check");
    // okCheck[0].checked;
    // const okButton = document.getElementsByClassName("ok-button");
    const todoContent = document.getElementsByClassName("todo-content");
    for (let i = 0; i < okCheck.length; i++) {
        okCheck[i].onclick = () => {
            if (okCheck[i].checked) { //이것자체가 true, false
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecoration = 'line-through';

            } else {
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecoration = 'none';



            }

        }
    }
}
