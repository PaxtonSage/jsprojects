const button = document.getElementById('button');
const text = document.getElementById('text');
const todo_list = document.getElementById('todo-list');

button.addEventListener('click', addItem);
window.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        addItem();
    } else if (event.key == 'Delete') {
        localStorage.clear();
        window.close();
    } else if (event.key == 't') {
        console.log(localStorage)
    }
})

let thingsToDo = [];
let stringList = [];

function load() {
    if (localStorage.getItem('items')) {
        stringList = localStorage.getItem('items').split(',');
        for (i of localStorage.getItem('items').split(',')) {
            thingsToDo.push(new item(i));
        }
    } else if (localStorage.getItem('visited') == undefined) {
        localStorage.setItem('visited', '1');
        thingsToDo.push(new item('New Session?'));
    }
}
load()

function item(text) {
    this.element = document.createElement('span');
    this.element.innerHTML = text;
    this.element.classList.add('item');
    todo_list.appendChild(this.element);

    this.element.addEventListener('click', function() {
        console.log(stringList.indexOf(this.innerHTML));
        stringList.splice(stringList.indexOf(this.innerHTML), 1);
        localStorage.setItem('items', stringList);
        this.remove();
    });
}

function addItem() {
    if (text.value == '') {
        alert('cant dp tat ,ate');
    } else {
        thingsToDo.push(new item(text.value));
        stringList.push(text.value);
        text.value = '';
        localStorage.setItem('items', stringList);
    }
}