/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    const one = [];
    let sortedAIndex = 0;
    let sortedBIndex = 0;
    let temp = -1;

    while (sortedAIndex < sortedA.length && sortedBIndex < sortedB.length) {
        if (sortedA[sortedAIndex] == sortedB[sortedBIndex]) {
            if (temp < 0 || one[temp] !== sortedA[sortedAIndex]) {
                one.push(sortedA[sortedAIndex]);
                temp++;
            }
            sortedAIndex++;
            sortedBIndex++;
        }

        else if (sortedA[sortedAIndex] < sortedB[sortedBIndex]) {
            sortedAIndex++;
        }
        else if (sortedB[sortedBIndex] < sortedA[sortedAIndex]) {
            sortedBIndex++;
        }
    }
    return one

}
console.log(orderedIntersection(arrA1, arrB1))
console.log(orderedIntersection(arrA2, arrB2))
console.log(orderedIntersection(arrA3, arrB3))


// function mergeDeDupe(arr1, arr2) {
//     const one = [];
//     let arr1Index = 0;
//     let arr2Index = 0;
//     let temp = -1;

//     while (arr1Index < arr1.length && arr2Index < arr2.length) {
//         if (arr1[arr1Index] == arr2[arr2Index]) {
//             if (temp < 0 || one[temp] !== arr1[arr1Index]) {
//                 one.push(arr1[arr1Index]);
//                 temp++;
//             }
//             arr1Index++;
//             arr2Index++;
//         }

//         else if (arr1[arr1Index] < arr2[arr2Index]) {
//             // if (temp < 0 || one[temp] !== arr1[arr1Index]) {
//             //     one.push(arr1[arr1Index]);
//             //     temp++;
//             // }
//             arr1Index++;
//         }
//         else if (arr2[arr2Index] < arr1[arr1Index]) {
//             // if (temp < 0 || one[temp] !== arr2[arr2Index]) {
//             //     one.push(arr2[arr2Index]);
//             //     temp++;
//             // }
//             arr2Index++;
//         }
//     }
//     return one
// }