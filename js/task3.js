function printStairs(n){
	let newStair = '';
	let i = 0;
	do{
		newStair += '#';
		console.log(newStair);
		i++;
	} while (i<n)
}
printStairs(4);