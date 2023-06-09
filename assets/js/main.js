// Length
// uppercase
// lowercase
// number
// symbols

// Libs with symbols

let globalLetter = [];

const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

const symbols = ["[",  "]", "%",  "\^",  "@", "\$",  "\.",  "\|",  "\?",  "\*",  "\+",  "\(",  "\)",];

let password = '';
let optionLength = 12


// take random number 
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generation Password with options
function geteratedPassword(options) {

  if ((options.length < 8) | (options.length > 36)) {
    return
  }

  if (options.upperAlphabet) {
    for (let index = 0; index < upperAlphabet.length; index++) {
      const element = upperAlphabet[index];

      globalLetter.push(element);
    }
  }

  if (options.lowerAlphabet) {
    for (let index = 0; index < lowerAlphabet.length; index++) {
      const element = lowerAlphabet[index];

      globalLetter.push(element);
    }
  }

  if (options.number) {
    for (let index = 0; index < number.length; index++) {
      const element = number[index];

      globalLetter.push(element);
    }
  }

  if (options.symbols) {
    for (let index = 0; index < symbols.length; index++) {
      const element = symbols[index];

      globalLetter.push(element);
    }
  }


  for (let index = 0; index < options.length; index++) {
    const letter = globalLetter[random(1, globalLetter.length - 1)];

    password += letter;
  } 

  viewHTML(password)
}



// View answer in HTMl
function viewHTML(password) {
  const outputBlock = document.querySelector(".js-main__output");
  let html = password;

  outputBlock.innerHTML = html
  
  return true;
}

// click on button "Generate"
const generateBtn = document.querySelector(".btn-generate")

const optionLengthNumber = document.querySelector("#passwordLengthNumber")
const optionLengthRange = document.querySelector("#passwordLengthRange")

optionLengthNumber.addEventListener("change", (event) => {
  updaterLenghtPassword(event.target)
})
  
optionLengthRange.addEventListener("mouseup", (event) => {
  updaterLenghtPassword(event.target)
})

const updaterLenghtPassword = (optionLenghtChanger) => {
  console.log(optionLenghtChanger.value, optionLength);
  // if (optionLength !== optionLenghtChanger.value) {
    // console.log('!==');
  optionLength = optionLenghtChanger.value
  optionLengthNumber.value = optionLength
  optionLengthRange.value = optionLength
  // } else {
    // console.log('==');
  // }
}


generateBtn.addEventListener("click", () => {

  // Options
  const optionUpperCase = document.querySelector("#useUpperCase").checked
  const optionLowerCase = document.querySelector("#useLowerCase").checked
  const optionNumbers = document.querySelector("#useNumbers").checked
  const optionSpecial = document.querySelector("#useSymbols").checked

  // reset password and globalLetter
  globalLetter = [];
  password = '';

  const options = {
    length: optionLength,
    upperAlphabet: optionUpperCase,
    lowerAlphabet: optionLowerCase,
    number: optionNumbers,
    symbols: optionSpecial,
  }


  geteratedPassword(options)
})

// Copy to clipboard 
const buttonOutput = document.querySelector('.js-main__output');
buttonOutput.addEventListener('click', () => {
  //нашли наш контейнер
  let content = buttonOutput.innerHTML;

  //производим его выделение
  let range = document.createRange();
  range.selectNode(buttonOutput);

  window.getSelection().addRange(range);

  //пытаемся скопировать текст в буфер обмена
  try {
    document.execCommand('copy');
  } catch (err) {
    console.log(err);
  }
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
  buttonOutput.innerHTML = "Copy :)"

  setTimeout(() => {
      buttonOutput.innerHTML = content
  }, 500)
  });