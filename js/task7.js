function firstAndLastToUpper(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1,str.length - 1) + str.charAt(str.length - 1).toUpperCase();
    return(result);
}
 console.log(firstAndLastToUpper('hello'));