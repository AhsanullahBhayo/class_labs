function reverseArray(array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }

    return reverseArray;
}

console.log(reverseArray([1,2,3])); 