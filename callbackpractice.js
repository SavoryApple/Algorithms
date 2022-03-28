/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true

    1. const newArr = [] variable to push into
    2. for loop to iterate over given arr
    3. if callback func is true, then slice from the first true index
    4. return newArr
*/
//                     v
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


function dropIt(arr, callback) {
    for (let i=0; i<arr.length; i++){
        if (callback(arr[i])){
            return arr.slice(i);
        }
    }
    return [];
}

function dropIt2(arr, callback) {
    let flag = false;
    const newArr = [];
    for (let i=0; i<arr.length; i++){
        if (flag){
            newArr.push(arr[i]);
        }
        else if (callback(arr[i])){
            flag = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}



console.log(dropIt2(arr1, callback1));
console.log(dropIt2(arr2, callback2));
console.log(dropIt2(arr3, callback3));