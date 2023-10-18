const meowords = require('./meowords');

function toCat(text) {
  const words = text.split(/(\W+)/);

  const catWords = words.map((word) => {
    const cleanedWord = word.replace(/^[^\w]+|[^\w]+$/g, '');

    if (meowords[cleanedWord.toLowerCase()]) {
      const catWord = cleanedWord === cleanedWord.toLowerCase()
        ? meowords[cleanedWord.toLowerCase()]
        : meowords[cleanedWord.toLowerCase()].charAt(0).toUpperCase() + meowords[cleanedWord.toLowerCase()].slice(1);
      
      return word.replace(cleanedWord, catWord);
    } else {
      return word;
    }
  });

  const catText = catWords.join('');

  return catText;
}

module.exports = toCat;