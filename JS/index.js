
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

let arrData = [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ShiftRight',
    'ArrowUp',
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight'
]

keyboard = keyboard.reverse()

arrData = arrData.reverse()

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
            button.insertAdjacentHTML('afterbegin', `<div class = "button" data-but = ${arrData[i]}>${keyboard[i]}</div>`)
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

    document.onkeydown = function(event) {
        console.log(event.code)
       document.querySelectorAll('.button').forEach((e) => { 
          if (e.dataset.but === event.code) {
            e.classList.add('active')
          }
      })
    }
    document.onkeyup = function(event) {
       document.querySelectorAll('.button').forEach((e) => { 
          if (e.dataset.but === event.code) {
            e.classList.remove('active')
          }
      })
    }

    document.querySelector('.container').onmousedown = (e) => {
        e.target.classList.add('active')
    }
    document.querySelector('.container').onmouseup  = (e) => {
        e.target.classList.remove('active')
        
    }