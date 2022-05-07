
let keyboard = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "⇐",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "capslock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "enter",
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "shift",
    "↑",
    "ctrl",
    "win",
    "alt",
    "space",
    "alt",
    "ctrl",
    "←",
    "↓",
    "→"
]

keyboard = keyboard.reverse()

let wrapper = document.querySelector('body')

let createTextariaTemplate = () => {
    const textarea = document.createElement('textarea')
    textarea.classList.add("textarea")
    return textarea
}

let createButtonTemplate = () => {
    const button = document.createElement("div")
    button.classList.add("container")
    return button
}
wrapper.innerHTML = ''
function get () {
    let button = ''
    let textarea = ''
    button = createButtonTemplate()
    textarea = createTextariaTemplate()
    wrapper.appendChild(textarea)
    for(let i = 0; i < keyboard.length; i++) {
        button.insertAdjacentHTML('afterbegin', `<div class = "button">${keyboard[i]}</div>`)
        wrapper.appendChild(button)
    }
    getCards()
}

get()

function getCards() {
    document.querySelectorAll(".button").forEach((e) => {
        if (e.innerHTML == "⇐") {
            e.classList.add("backspace")
        } else if (e.innerHTML === "tab") {
            e.classList.add("tab")
        } else if (e.innerHTML === "capslock") {
            e.classList.add("capslock")
        } else if (e.innerHTML === "enter") {
            e.classList.add("enter")
        } else if (e.innerHTML === "shift") {
            e.classList.add("shift")
        } else if (e.innerHTML === "space") {
            e.classList.add("space")
        }  
        })
    }
    
 



