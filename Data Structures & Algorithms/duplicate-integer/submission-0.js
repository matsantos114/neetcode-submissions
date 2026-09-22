class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dupObj = {};
        for(let i = 0; i < nums.length; i++){
            let ele = nums[i];
            if(ele in dupObj) return true;
            dupObj[ele] = true
        }
        return false
    }
}

/**
 * Iterate through the array and check if that number appears more
 * than once in the array 
 * 
 *  if yes return true in the function 
 *  else return false
 * 
 * how do we check for duplicates?
 * we can store each element from the array into an obj
 * we the check as we iterate if that number is in the obj
 *  
 * 
 * 
 *  */ 
