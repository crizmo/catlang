# Catlang - Cat Language Translator

Catlang is a fun npm package that translates text into a fictional cat-like language. 
It selectively replaces certain words with their corresponding cat language translations while preserving punctuation and spacing.

## Installation

You can install Catlang using npm:

```bash
npm install catlang
```

## Usage
```javascript
const catlang = require('catlang');

const inputText = "Hello! Are you feeling good?";
const catText = catlang(inputText);
console.log(catText); // Output: "Hellow! Are you meowling good?"
```

## Meowords [ Word Dictionary ]
The translation of words is based on a dictionary of words. You can customize this dictionary by modifying the src/meowords.js file in the package.
As of now, the dictionary only contains a few words. Feel free to add more words to the dictionary to expand the vocabulary of Catlang.

## Contributing
Feel free to contribute to this project by creating a pull request or opening an issue if you find any problems or have suggestions for improvement.

## Acknowledgments
The idea for Catlang was inspired by the creativity of cat enthusiasts.
Built with the love of cats in mind.
Enjoy translating text into the playful "cat language" with Catlang!