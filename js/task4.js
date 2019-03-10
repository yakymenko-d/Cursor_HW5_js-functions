function sumRange(start, end) { 
    sum = 0; 
    while ( start <= end ) {
        sum += start; 
        start++;  
    }
    if (start=end) {
        console.log(sum)
    }
    return sum;
    
 }

 sumRange(2, 4) // 9  
 sumRange(-1, 3) // 5 
 sumRange(4, 8) // 30