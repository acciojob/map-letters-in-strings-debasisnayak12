//your JS code here. If required.
function mapLetters(word) {
	let obj = {};
	word.split('').forEach((letter,i) => {
		if(/[a-zA-Z]/.test(letter)){
			if(!(letter in obj)){
				obj[letter] = [];
			}
			obj[letter].push(i);
		}
	});
	return obj;
}
const word = prompt("Enter a word");
console.log(mapLetters(word));