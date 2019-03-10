function toUppercase(str) {
  let newStr = '';
  for(let i = 0; i <= str.length-1; i++){
    newStr += str[i].toUpperCase();
  }
  console.log(newStr);
}
toUppercase('hello');