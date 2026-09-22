class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(diff in obj) return [obj[diff], i]
            obj[nums[i]] = i
        }
    }

    /*
    Given an array of integers find the target sum given two of the 
    integers in the array 

    array = [3,4,5,6], 10 
               ^   ^
    we know that 10 - the current integer would allow to find the 
    remaining ingeter for examples
    10 - 4 = 6
    6 is in the array but how do find 6 in the array in an time efficient 
    manner 

    We can use a hash map that stores each visited integer 
    for example 
    on the 0th iteration we store 3 
    
    now as we store each number in the hashmap we can check using the 
    formula (target - arr[i] = (check of this value is in the hashmap))

    1. first iteration 0th, 3 is 10-3 = 7... is 7 in the map? no
        store 3 in the map

    2. second iteration 1th, 3 is 10 - 4 = 6... is 6 in the map? no
        store 4 in the map 

    3. third iteration 2th, 5 is 10 - 5 = 5 is 5 in the map? no
        store 5 in the map 
    
    4. fourth iteration 3th, 6 is 10 - 6 = 4 is 4 in the map? yes!
        now we can return the properties value which would be
        the index and return the current index in an array for 
        example [1,3]
    */
}
