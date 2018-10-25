var input = process.argv.slice(2); // takes an empty array beginning at array item #2
var array = [];
for (var x = 0; x < input.length; x++){
  array.push(pigLatin(input[x]));
}
function pigLatin(word){
  return word.slice(1, word.length) + word[0] + "ay"; // .slice takes a (start position, length) format
}
console.log(array.join(" "));