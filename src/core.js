const meowords = require('./meowords');

const Catlang = () => {
  return {

    toCat: (text) => {
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
    },

    toEnglish: (text) => {
      // Split the text into words using non-word characters as separators
      const words = text.split(/(\W+)/);

      // Map the cat words back to English
      const englishWords = words.map((word) => {
        const cleanedWord = word.replace(/^[^\w]+|[^\w]+$/g, '');

        // Check if the word is in the meowords dictionary
        if (Object.values(meowords).includes(cleanedWord.toLowerCase())) {
          // Find the cat word and convert it to English
          const englishWord = Object.keys(meowords).find(
            (key) => meowords[key] === cleanedWord.toLowerCase()
          );

          return word.replace(cleanedWord, englishWord);
        } else {
          return word;
        }
      });

      // Join the words back into a single string
      const englishText = englishWords.join('');

      return englishText;
    },
  }

}

module.exports = Catlang();