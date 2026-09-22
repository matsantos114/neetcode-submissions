class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bestProfit = 0;
        let left = 0, right = left + 1;
        while (right < prices.length){
            let buy = prices[left], sell = prices[right];
            if(buy > sell){
                left = right
                right = left + 1
            } else {
                if(sell - buy > bestProfit) bestProfit = (sell - buy);
                right++
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
 * Brute Force Code:
 *  maxProfit(prices) {
        let bestProfit = 0;
        for(let i = 0; i < prices.length-1; i++){
            for(let j = i+1; j < prices.length; j++){
                let total = prices[j] - prices[i];
                if(total > bestProfit) bestProfit = total;
            }
        }
        return bestProfit
    }
 * 
 * 
 * Sliding Window Method: 
 *  prices = [10,8,7,5,2]
 *               b < s 
 * prices[r] - prices[l] = bestProfit
 * 
 * if r is lower then l than we now that is the lower
 * price we can buy for 
 *  we can reassign l to be at r and iterate through the new
 * subarray to find the best profit 
 * 
 * when r reached the end of the array that is all possiblities
 * checked, we can assume this based on the left pointer and how it 
 * has to update depending on the r right pointer
 * 
 * create a while loop
 *  declare l and r variable
 * left is at the 0 index
 * right will always be at l + 1
 *  
 *  first check if r < l, if true re-assign pointers
 *      l = r
 *      r = l+1
 * else     
 *      [10,1,5,6,7,1]
 *          l   r
 * check r - l and see if that profit is greater than best profit 
 *  if true update best profit 
 * update right pointer r++ 
 * 
 * loop ends when r is at the end of the array
 * 
 * return best profit 
 * 
 * 
 */
