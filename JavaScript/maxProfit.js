
let prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    
let min = 99999999999999
let max = 0

for ( let x = 0; x < prices.length; x++) {

    if (prices[x] < min) min = prices[x]

    else if (prices[x] - min > max) max = prices[x] - min

}

    return max 

};

console.log(maxProfit(prices))