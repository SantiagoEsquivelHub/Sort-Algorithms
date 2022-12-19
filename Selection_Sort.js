function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    return items;
}

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j <= array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        array = swap(array, min, i)
    }
    return array;
}

let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
let sortedArray = selectionSort(array);
console.log(sortedArray)