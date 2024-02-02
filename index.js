const findLongestWord = (arr) => {
    let longestStrLength = 0
    let longestStr = ''
    for (const str of arr) {
        if (str.length > longestStrLength) {
            longestStrLength = str.length
            longestStr = str
        }
    }
    return longestStr
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"


const sumUniqueNumbers = (arr) => {
    let arrayOfUniqueNumbers = []
    let sum = 0
    for (const num of arr) {
        if (!arrayOfUniqueNumbers.includes(num)) {
            arrayOfUniqueNumbers.push(num)
            sum += num
        }
    }
    return sum
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6


const mergeArrays = (...arrays) => {
    const arr = arrays.flat()
    const newArr = []
    for (i = arr.length - 1; i >= 0; i --) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
            arr.pop()
        }
    }
    return newArr.sort((a, b) => a - b)
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]


const hasProperty = (obj, str) => {
    return Object.hasOwn(obj, str)
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true


const getPropertyValue = (obj, str) => {
    if (Object.hasOwn(obj, str)) {return obj[str]}
    return undefined
}

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".


const invertObject = (obj) => {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
        result[value] = key
    }
    return result
}

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }