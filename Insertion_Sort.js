function insertionSort(array) {
  // Only change code below this line

  for (let j = 1; j < array.length; j++) {

    //next element
    let key = array[j];

    //first element
    let i = j - 1;

    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = key;

  }
  console.log(array)
  return array;
  // Only change code above this line
}

insertionSort([5,4,3,2,1])

/*
Best case: n
Worst case: n^2
*/