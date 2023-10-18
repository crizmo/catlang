const Catlang = require('./index');

const text = 'Hello! Are you feeling good?';
const catText = Catlang.toCat(text);
console.log(catText);

const catText2 = 'Meow! Are you feeling me-ow?';
const englishText = Catlang.toEnglish(catText2);
console.log(englishText);
