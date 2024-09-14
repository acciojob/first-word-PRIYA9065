function firstWord(s) {
  // your code here
	String str = '';

	for(let i = 0; i < s.length; i++){
		str = str + s.charAt(i);
		if(s.charAt(i) == ' '){
			return str;
		}
	}}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));