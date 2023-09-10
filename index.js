const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const copyPass = document.querySelector("#copy");
const config = {
  length: 10,
  symbols: false,
  numbers: false,
};
//+числа
includeNumbers.addEventListener("change", (event) => {
  config.numbers = !config.numbers;
});
//+символы
includeSymbols.addEventListener("change", (event) => {
  config.symbols = !config.symbols;
});

passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
  //длина регулируется тут
  config.length = passLength.value;
});

//кнопка копировать
copyPass.addEventListener("click", () => {
  copy();
});

//кнопка герерировать
generateBtn.addEventListener("click", () => {
  generatePassword(config);
  input();
});

function generatePassword(config) {
  let result = "";
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  const numbers = "1234567890";
  let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMrerttr";
  if (config.symbols) {
    string = string + symbols;
  }
  if (config.numbers) {
    string = string + numbers;
  }

  for (let i = 0; i < config.length; i++) {
    result += string[Math.floor(Math.random() * string.length)];
  }
  return result;
}

//выводит пароль в инпут
function input() {
  document.querySelector("#result").value = generatePassword(config);
}

function copy() {
  /* Находим текстовое поле */
  var copyText = document.getElementById("result");

  /* Выбираем текстовое поле */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* Для мобильных устройств */

  /* Копируем текст из текстового поля */
  navigator.clipboard.writeText(copyText.value);

  /* Выводим скопированный текст в диалоговом окне */
  alert("Скопированный текст: " + copyText.value);
}
