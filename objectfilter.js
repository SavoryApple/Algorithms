// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items

//1. loop thru input array
//2. for each input, compare against the SearchFor var
//3. if it matches, push to a new array
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

//using flags
function findObjectsFilter(searchObj, items) {
    let tempArr = [];
    //loop throught the items
    for (itemKey of items) {
        //loop through the searchObj
        let flag = false
        for (searchKey in searchObj) {
            //check if searchObj matches the items, if so - pass it into the return array//or delete the one is not matching from the object
            if (itemKey.hasOwnProperty(searchKey)) {
                if (itemKey[searchKey] != searchObj[searchKey]) {
                    flag = true;
                }
            } else {
                flag = true;
            }
        }
        if (!flag) {
            tempArr.push(itemKey);
        }
    }
    //return the array
    return tempArr;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Using filter method:
const findObjectsFilter = (searchFor, itemsArr) => {
    if (searchFor.length === 0) {
        return [];
    }
    for (let key in searchFor) {
        itemsArr = itemsArr.filter(e => e.hasOwnProperty(key) && searchFor[key] == e[key])
    }
    return itemsArr;
}

console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));
