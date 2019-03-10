function removeDuplicationLetters(str) {
	let duplicate='';
	for (let i=0; i < str.length; i++) {
		if ( str[i] === ' ') {
			duplicate += str[i];
		}
		if (duplicate.toLowerCase().indexOf(str.toLowerCase().charAt(i)) == -1) {
			duplicate += str[i];
		}
	}
	return duplicate;  
}  
console.log(removeDuplicationLetters('Hello I am Iron Man'));