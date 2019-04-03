function toUppercase(str) {
  let newStr = '';
  for(let i = 0; i <= str.length-1; i++){
    newStr += str[i].toUpperCase();
  }
  console.log(newStr);
}
toUppercase('hello');

const toUpperCase = str =>
  	Array.prototype.map.call(str, (el, i) => {
   	const charCode = el.charCodeAt(0);
   	const isLowerCaseChar = charCode >= 97 && charCode <= 122;
   	if(isLowerCaseChar) {
    	return String.fromCharCode(charCode - 32);
   	} 
   	return el;
}).join('');

console.log(toUpperCase('Dianka a frontend engineer like never before'));