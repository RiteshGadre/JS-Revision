const input = document.querySelector('input');
const addTodo = document.querySelector('.addTodo');
const todoItems = document.querySelector('.todoItems');

addTodo.addEventListener('click', (e) => {
    e.preventDefault();
    const newItem = document.createElement('div');
    const newItemText = document.createElement('p');
    const newItemEditButton = document.createElement('button');
    const newItemDeleteButton = document.createElement('button');

    newItem.classList.add('newItem', 'flex', 'gap-4', 'p-2', 'bg-yellow-300')
    newItemEditButton.classList.add('edit');
    newItemDeleteButton.classList.add('delete');

    newItemText.innerHTML = input.value;
    newItemEditButton.innerHTML = "Edit";
    newItemDeleteButton.innerHTML = "Delete";

    newItem.appendChild(newItemText);
    newItem.appendChild(newItemEditButton);
    newItem.appendChild(newItemDeleteButton);
    todoItems.appendChild(newItem);

    input.value = '';
})


document.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('edit')) {
        input.value = e.target.parentElement.querySelector('p').innerHTML;
       e.target.parentElement.remove();
       
    }

    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    //    input.value = "";
    }

    
})
