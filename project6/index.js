document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".form__button");

  button.addEventListener("click", function() {
    const textToEncrypt = document.querySelector(".form__input").value;
    const step = document.querySelector(".form__step").value;
    document.querySelector(".form__output").value = encrypt(
      textToEncrypt,
      parseInt(step, 10)
    );
  });

  function encrypt(text, step) {
    const alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р",
    "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];
    return text.split("").map(letter => {
      if (isLetter(letter)) {

        const letterPos = alphabet.indexOf(letter.toLowerCase());
        const resLetter = alphabet[(letterPos + step) % alphabet.length]
        if (isUpperCase(letter)) {
          return resLetter.toUpperCase()
        } else {
          return resLetter;
        }

      } else {
        return letter;
      }

    }).join('')
  }

  function isLetter(letter) {
    return letter >= 'А' && letter <= 'я'
  }

  function isUpperCase(letter) {
    return letter.toUpperCase() === letter;
  }

});
