
let n = 4

var climbStairs = function (n) {
    
    if (n <= 2) return n; 
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
        console.log(second)
    }
    
    return second;
};

console.log(climbStairs(n))
1+1+1 
2+1+1
2+2+1
1+2+1
1+1+2
1+2+2
2+1+2
2+2+2

