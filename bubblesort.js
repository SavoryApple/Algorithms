//highest number gets bubbled up to the end of the array
//[5,3,4,2,1]
//start at largest number and compare it to neighboring, if 0>1, swap the numbers
//[3,5,4,2,1]
//start at index 1 and compare to to, if 1>2, swap the numbers
//[3,4,5,2,1]
//[3,4,2,5,1]
//[3,4,2,1,5]
//repeat starting at 4 (next highest number)
//[3,4,2,1,5]
//[3,2,4,1,5]
//[3,2,1,4,5]
//now starting at 3
//[3,2,1,4,5]
//[2,3,1,4,5]
//[2,1,3,4,5]

// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){ 
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
}

// call the function and pass nums1, nums2, nums3
// call the function and pass nums1, nums2, nums3
console.log("****nums1****")
bubbleSort(nums1)
console.log(nums1)
console.log("****nums2****")
bubbleSort(nums2)
console.log(nums2)
console.log("****nums3****")
bubbleSort(nums3)
console.log(nums3)