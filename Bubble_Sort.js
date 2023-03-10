const bubbleSort = (array) => {
    for (let i = 1; i <= array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
let sortedArray = bubbleSort(array);
console.log(sortedArray)

// O(n^2)