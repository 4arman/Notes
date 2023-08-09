const listElement = document.getElementById('ul-list')
const inputElement = document.getElementById('input-1')
const createBtn = document.getElementById('btn-1')
const checkBtn = document.getElementById('span-1')
const recheckBtn = document.getElementById('span-2')

//const notes = ['купить хлеб!', 'купить масло!', 'купить молоко!']

const notes = [ {

    title: 'купить хлеб!',
    completed: false, 
    },

    { 
    
    title: 'купить масло!',
    completed: true, 
    },
]

function render () {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNot = {
        title: inputElement.value,
        completed: false,
    }

    notes.push(newNot)
    render()

        inputElement.value = ''
}

listElement.onclick = function (event) {
    console.log(event.target)
}

function getNoteTemplate (note, index) {
    console.log(note.completed)
    return `<li class="li-list">
    <span id="name" class="${note.completed ? 'text-decoration-line-through' : ''}">
    ${note.title}</span>
    <span>
        <span id="span-1"${note.completed ? 'warning' : ''} data-index="${index}" data-type="toggle">&check;</span>
        <span id="span-2">&times;</span>
    </span>
    </li>`
    }

checkBtn.onclick = function () {
    inputElement.value = ''
}