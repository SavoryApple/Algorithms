// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDeDupe(arr1, arr2) {
    const one = [];
    let arr1Index = 0;
    let arr2Index = 0;
    let temp = -1;

    while (arr1Index < arr1.length || arr2Index < arr2.length) {
        if (arr1[arr1Index] == arr2[arr2Index]) {
            if (temp < 0 || one[temp] !== arr1[arr1Index]) {
                one.push(arr1[arr1Index]);
                temp++;
            }
            arr1Index++;
            arr2Index++;
        }

        else if (arr1[arr1Index] < arr2[arr2Index] || arr2[arr2Index] === undefined) {
            if (temp < 0 || one[temp] !== arr1[arr1Index]) {
                one.push(arr1[arr1Index]);
                temp++;
            }
            arr1Index++;
        }
        else if (arr2[arr2Index] < arr1[arr1Index] || arr1[arr1Index] === undefined) {
            if (temp < 0 || one[temp] !== arr2[arr2Index]) {
                one.push(arr2[arr2Index]);
                temp++;
            }
            arr2Index++;
        }
    }
    return one
}
console.log(mergeDeDupe(arr1, arr2));

function mergeDeDupeRefactored(arr1, arr2) {
    const one = [];
    let arr1Index = 0;
    let arr2Index = 0;
    let temp = -1;

    while (arr1Index < arr1.length || arr2Index < arr2.length) {
        let numToPush = arr1[arr1Index]
        if (arr1[arr1Index] == arr2[arr2Index]) {
            arr1Index++;
            arr2Index++;
        }

        else if (arr1[arr1Index] < arr2[arr2Index] || arr2[arr2Index] === undefined) {
            arr1Index++;
        }
        else if (arr2[arr2Index] < arr1[arr1Index] || arr1[arr1Index] === undefined) {
            numToPush = arr2[arr2Index];
            arr2Index++;
        }
        if (temp < 0 || one[temp] !== numToPush) {
            one.push(numToPush);
            temp++;
        }
    }
    return one
}
console.log(mergeDeDupe(arrA, arrB));

// try out some other tests
// mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
// mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a ->
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]