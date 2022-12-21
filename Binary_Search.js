const binarySearch = (array, value) => {
    let last = array.length - 1;

    if (value < array[0] || value > array[last]) {
        return "Value Not Found";
    } else {
        let left = 0;
        let right = last;
        let arr = [];

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            arr.push(array[mid]);

            if (array[mid] == value) {
                return [...arr];
            } else if (array[mid] < value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return "Value Not Found";
    }
}
const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];
const result = binarySearch(testArray, 5);
console.log(result)

//   O(log(n))