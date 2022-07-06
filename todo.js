// Select all necessary elements

let input = document.querySelector('.todo-input');

let MainTodoContainer = document.getElementById('todos');

let addingButton = document.querySelector('.add-item');

let deleteAllBtn = document.querySelector('.deleteBtn');

let completedButton = document.querySelector('.completed');

let removeButton = document.querySelector('.trash');


addingButton.addEventListener('click', function (e) {
    // stop the button behaviour
    e.preventDefault();

    // create all elements
    if (input.value.trim()) {
        // Ul tag
        let ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        // todo div

        let todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        let liTag = document.createElement('li');
        liTag.innerText = input.value;
        liTag.classList.add('todo-item');

        // Button div
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        // completed button element
        let completedButton = document.createElement('button');
        completedButton.classList.add('completed');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';

        // Edit btn
        let editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = function () {
            editWorking(liTag);
        }

        // Trash button
        let trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';


        // Appending elements into each other

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completedButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);

        // if input is empty then don't display list items

        MainTodoContainer.appendChild(ulTag);

        // sessionStorage

        // when the add button is clicked ,clear the input vlaue
        input.value = '';

        // coplete and trash button working
        todoList.addEventListener('click', function (e) {
            let items = e.target;
            if (items.classList[0] === 'completed') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('line_through');
            }
            else if (items.classList[0] === 'trash') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function () {
                    let todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    } else if (input.value === '') {
        alert('Please fill the input field')
    }
});

function editWorking(e) {
    let editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleAllElements(){
    let gettingulTag = document.querySelector('.todo-list-container');
    for (let i = 0; i < gettingulTag.length; i++) {
        gettingulTag[i].remove();
    }
    input.value = '';
}