function sumRange(start, end) { 
    sum = 0; 
    while ( start <= end ) {
        sum += start; 
        start++;  
    }
    if (start=end) {
        return(sum)
    }
 }

 console.log(sumRange(2, 4)) // 9  
 console.log(sumRange(-1, 3)) // 5 
 console.log(sumRange(4, 8)) // 30