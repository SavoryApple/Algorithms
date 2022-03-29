/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = {
    b: 70,
    a: 184, //+20
    c: 42, //+10
}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) { }

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");


function hashRehash(str) {
    const result = {}
    let tempN = ''
    let tempA = ''
    for (ele of str) {
        if (isNaN(ele)) {
            if (result.hasOwnProperty(tempA)) {
                result[tempA] = result[tempA] + parseInt(tempN)
            } else if (tempA) {
                result[tempA] = parseInt(tempN)
            }
            tempA = ele
            tempN = ''
        } else {
            tempN += ele

        }
    }

    if (result.hasOwnProperty(tempA)) {
        result[tempA] = result[tempA] + parseInt(tempN)
    } else if (tempA) {
        result[tempA] = parseInt(tempN)
    }



    // const newArry = Object.keys(result).sort()
    const newArry = insertionSort2(Object.keys(result))
    let hash = ''
    for (key of newArry) {
        hash += key + result[key]
    }

    return hash
}





function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (temp < arr[j]) {
                arr[j + 1] = arr[j]
                if (j == 0) {
                    arr[j] = temp
                }
            } else {
                arr[j + 1] = temp
                break
            }
        }
    }
    return arr
}



function rehash2(str) {
    let frequencyMap = {}
    // Splits on every letter, returns array of numbers
    let numbers = str.split(/[a-zA-Z]/);
    // Splits on numbers, returns array of letters
    let letters = str.split(/[0-9]/);
    // Gets the larger length of the two arrays and sets it to max
    let max = numbers.length > letters.length ? numbers.length : letters.length;

    let values = [];
    let keys = [];

    // Getting rid of all the extra empty strings
    for (let y = 0; y < max; y++) {
        if (numbers[y] !== undefined && numbers[y] !== "") {
            values.push(numbers[y]);
        }
        if (letters[y] !== undefined && letters[y] !== "") {
            keys.push(letters[y]);
        }
    }

    // Add each to the frequency object 
    for (let x = 0; x < values.length; x++) {
        if (frequencyMap.hasOwnProperty(keys[x])) {
            frequencyMap[keys[x]] += parseInt(values[x]);
        }
        else {
            frequencyMap[keys[x]] = parseInt(values[x]);
        }
    }

    // Get the keys of the frequencyMap object
    let objKeys = Object.keys(frequencyMap);
    // sort the keys
    objKeys.sort();
    let output = "";
    // create the output string in alphabetical order
    for (let z = 0; z < objKeys.length; z++) {
        output = output + objKeys[z] + frequencyMap[objKeys[z]];
    }

    return output;
}