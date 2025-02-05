arr = [7,1,5,3,6,4]

def maxProfit(prices):
    
    # n = 0
    # r = 1
    # for x in range (len(prices)-1,-1,-1):
        
    #     for y in range (len(prices)-r,-1,-1):
    #         if (prices[x] - prices[y] > n): n = prices[x] - prices[y]
    #     r += 1
    # return n
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit 

print(maxProfit(arr))