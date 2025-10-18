//write a function
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i, " when", word[i] !== match);
    }
  }
}
//call the function
letterFinder("test", "t");
// letterFinder("test", "e");
letterFinder("test", "x");
