function firstWord(s) {
  // your code here
	let ArrOfStr = s.split(" ");
	let firstWord = ArrOfStr[0];
	return firstWord;
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));