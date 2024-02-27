function applyFunction(array, fun) {
    
    const result = array.map(fun);
    return result;
}


const numbers = [1, 2, 3];
const doubleFun = (x) => x * 2;
const result = applyFunction(numbers, doubleFun);
console.log(result); 