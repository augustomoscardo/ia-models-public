const { Translator } = require("./Translator");

function translate(textENG) {
  return Translator.translate(textENG);
}

module.exports = { translate }