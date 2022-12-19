function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    return items;
}


function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]; //middle element
    let i = left; //left pointer
    let j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            items = swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}


function quickSort(array, p, r) {
    // Only change code below this line

    if (p < r) {
        let q = partition(array, p, r);
        quickSort(array, p, q - 1);
        quickSort(array, q, r);

    }
    return array;
    // Only change code above this line
}

let sortedArray = quickSort([5, 4, 3, 2, 1], 0, 4);
console.log(sortedArray)

/* 
Average case: 
Worst case:  n^2
*/