class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestProfit = 0;
        for(let i = 0; i < prices.length-1; i++){
            for(let j = i+1; j < prices.length; j++){
                let total = prices[j] - prices[i];
                if(total > bestProfit) bestProfit = total;
            }
        }
        return bestProfit
    }
}

/**
 * buy and sell crypto, we can follow the buy low sell high rule
 * 
 * find the day that is lowest while finding the best day to sell (being the highest price)
 * 
 * prices = [10,1,5,6,7,1]
 * 
 * Brute Force: Using a nested loop we can check our 0 index first
 * with an i pointer and a j pointer at i + 1;
 * we declare a variable maxProfit that checks our biggest profit from 
 * each iteration and update the profit when we find a profit larger
 * than previous
 * 
 * Declare a variable bestProfit = 0;
 * initiate i loop starting at index 0
 * initiate j loop nested in the i loop at i + 1
 *  check if prices[i] - prices[j] > bestProfit
 *      if (true) update bestProfit
 * else continue iterating 
 * return bestProfit when done 
 * 
 * 
 * 
 */
