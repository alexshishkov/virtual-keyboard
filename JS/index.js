let keyboard = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'capslock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'enter',
  'shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '↑',
  'shift',
  'ctrl',
  'win',
  'alt',
  'space',
  'alt',
  'ctrl',
  '←',
  '↓',
  '→',
];

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
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

keyboard = keyboard.reverse();

arrData = arrData.reverse();

const wrapper = document.querySelector('body');

const createTextariaTemplate = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  return textarea;
};

const createButtonTemplate = () => {
  const button = document.createElement('div');
  button.classList.add('container');
  return button;
};

function getCards() {
  document.querySelectorAll('.button').forEach((e) => {
    if (e.innerHTML === 'Backspace') {
      e.classList.add('backspace');
    } else if (e.innerHTML === 'tab') {
      e.classList.add('tab');
    } else if (e.innerHTML === 'capslock') {
      e.classList.add('capslock');
    } else if (e.innerHTML === 'enter') {
      e.classList.add('enter');
    } else if (e.dataset.but === 'ShiftLeft') {
      e.classList.add('shift');
    } else if (e.innerHTML === 'space') {
      e.classList.add('space');
    }
  });
}

wrapper.innerHTML = '';
function get() {
  let button = '';
  let textarea = '';
  button = createButtonTemplate();
  textarea = createTextariaTemplate();
  wrapper.appendChild(textarea);
  for (let i = 0; i < keyboard.length; i += 1) {
    button.insertAdjacentHTML('afterbegin', `<div class = "button" data-but = ${arrData[i]}>${keyboard[i]}</div>`);
    wrapper.appendChild(button);
  }
  getCards();
}

get();

let textValue = '';

document.onkeydown = (event) => {
  if (event.key.length === 1) {
    textValue += event.key;
    document.querySelector('textarea').value = textValue;
  } else if (event.code === 'Backspace') {
    textValue = textValue.slice(0, -1);
    document.querySelector('textarea').value = textValue;
  } else if (event.code === 'Enter') {
    textValue += '\n';
  } else if (event.code === 'Tab') {
    textValue += '   ';
    return false;
  }
  document.querySelectorAll('.button').forEach((e) => {
    if (e.dataset.but === event.code) {
      e.classList.add('active');
    }
  });
  return true;
};
document.onkeyup = (event) => {
  document.querySelectorAll('.button').forEach((e) => {
    if (e.dataset.but === event.code) {
      e.classList.remove('active');
    }
  });
};

document.querySelector('.container').onmousedown = (e) => {
  e.target.classList.add('active_but');
  if (e.target.innerHTML.length === 1) {
    textValue += e.target.innerHTML;
  } else if (e.target.innerHTML === 'Backspace') {
    textValue = textValue.slice(0, -1);
  } else if (e.target.innerHTML === 'enter') {
    textValue += '\n';
  } else if (e.target.innerHTML === 'space') {
    textValue += ' ';
  } else if (e.target.innerHTML === 'tab') {
    textValue += '    ';
  }
  document.querySelector('textarea').value = textValue;
};

document.querySelector('.container').onmouseup = (e) => {
  e.target.classList.remove('active_but');
};
