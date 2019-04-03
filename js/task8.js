function cursorCheck(str) {
	let res = str.toLowerCase()
	    let low_case1 = res.includes(`ostap`);
	    let low_case2 = res.includes(`cursor`);
	    let low_case3 = res.includes(`ironman`);
	if (low_case1 == true || low_case2 == true || low_case3 == true) {
	    return(true);
	} else {
	    return(false);
	}
}
 console.log(cursorCheck('Hello I am OstaP')) // true
 console.log(cursorCheck('Superman is here'))// false
 console.log(cursorCheck('What about iRonMan?')) //true