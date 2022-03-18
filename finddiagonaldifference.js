/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
    let r1 = 0;
    let r2 = sqrMatrix.length - 1;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < sqrMatrix.length; i++) {
        r1 = i;
        r2 = sqrMatrix.length - 1 - i;
        sum1 += sqrMatrix[r1][r1]
        // console.log("right"+sqrMatrix[r1][r1]);
        sum2 += sqrMatrix[r1][r2]
        // console.log("left"+sqrMatrix[r1][r1]);

    }
    // console.log("sum1: "+sum1);
    // console.log("sum2: "+sum2);
    return (sum1 - sum2);
}

function diagonalDifference(sqrMatrix) {
    let sum1 = 0;
    let sum2 = 0;

    //sum1
    for (let i = 0; i < sqrMatrix.length; i++) {
        sum1 += sqrMatrix[i][i];
    }
    console.log("Sum from top left to bottom right:", sum1);

    //sum2
    let reverseIdx = sqrMatrix.length - 1;
    for (let j = 0; j < sqrMatrix.length; j++) {
        sum2 += sqrMatrix[j][reverseIdx];
        reverseIdx--;
    }
    console.log("Sum from top right to bottom left:", sum2);

    console.log("Final equation: |" + sum1 + '-' + sum2 + "|");
    return Math.abs(sum1 - sum2);
}
