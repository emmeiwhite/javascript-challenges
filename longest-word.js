let sentence1 = "We are here to rule the world";
let sentence2 = "There are no accidents";

function longestWord(sentence) {
  const wordsArray = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  console.log(longestWord);
}

longestWord(sentence1);
longestWord(sentence2);
