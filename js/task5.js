function minValue(a,b,c) {
	if (a<b && a<c) {
		console.log(a);
	} else if (b<a && b<c) {
		console.log(b);
	} else {
		console.log(c);
	}
}
minValue(10,5,11);

function min(a, b, c) { 
  let minNumber = Math.min(a, b, c);
  return(minNumber);
}
 console.log(min(10,5,11));