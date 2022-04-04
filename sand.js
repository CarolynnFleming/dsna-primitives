//' alchemy rocks golfunction 
function odishOrEvenish(number) {
  const numArray = number.split('');
  const sum = numArray.reduce((prev, curr) => prev + curr, 0);
  const string = sum % 2 ? 'odish' : 'evenish';
  console.log(string, 'ghgh');
  return string;
}
odishOrEvenish('12345');

function fizzBuzz(number) {
  const array = [];
  for(let i = 1; number >= i; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      array.push('fizzbuzz');
    } else if(i % 3 === 0){
      array.push('fizz');
   
    }else if(i % 5 === 0){

      array.push('buzz');
    } else {
      array.push(i);
   
    } 
  }
  return array;
}
console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  const sortedA = wordOne.split('').sort().join();
  const sortedB = wordTwo.split('').sort().join();
  if(sortedA == sortedB) {
    return 'true';
  } else if (sortedA != sortedB) {
    return 'false';}
}
console.log(anagrams('superintended', 'unpredestined'));
