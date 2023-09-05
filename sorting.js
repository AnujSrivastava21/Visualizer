// Global variables
let customArray = [];

// Function to visualize the array in the UI with weights
function visualizeArrayWithWeights(array) {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';
    
    array.forEach((obj, index) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        bar.style.height = `${obj.weight * 3}px`;
        bar.innerText = obj.weight; // Display the weight on the bar
        arrayContainer.appendChild(bar);
    });
}

// Function to swap two elements in the array
async function swap(array, i, j) {
    await sleep(100); // Add a delay for visualization
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    visualizeArrayWithWeights(array);
}

// Function to add a delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listener for the Add Element button
document.getElementById('addElement').addEventListener('click', () => {
    const elementInput = document.getElementById('elementInput');
    const element = parseInt(elementInput.value);

    if (!isNaN(element)) {
        customArray.push({
            weight: element,
            index: customArray.length
        });
        visualizeArrayWithWeights(customArray);
        elementInput.value = ''; // Clear the input field
    } else {
        alert('Invalid input. Please enter an integer element.');
    }
});

// Event listener for the Sort button
document.getElementById('bubblesortButton').addEventListener('click', async () => {
    if (customArray.length > 0) {
        await bubbleSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Bubble Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            'Bubble sort is a simple sorting algorithm with a time complexity of O(n^2) and a space complexity of O(1). It\'s primarily used for educational purposes due to its inefficiency for large datasets, but it can be practical for small datasets or nearly sorted data.';
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});

// Event listener for the Heap Sort button
document.getElementById('heapSortButton').addEventListener('click', async () => {
    // Call the heapSort function here
    if (customArray.length > 0) {
        await heapSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Heap Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            'Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It has a time complexity of O(n log n) and is often used for its consistent performance across different input data distributions.';
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});
// Event listener for the Selection Sort button
document.getElementById('selectionSortButton').addEventListener('click', async () => {
    if (customArray.length > 0) {
        await selectionSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Selection Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            "Selection sort is an in-place comparison sorting algorithm with a time complexity of O(n^2). It works by dividing the input list into two parts: the sorted and the unsorted subarray. It repeatedly selects the minimum element from the unsorted subarray and moves it to the end of the sorted subarray.";
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});


// Event listener for the Insertion Sort button
document.getElementById('insertionSortButton').addEventListener('click', async () => {
    if (customArray.length > 0) {
        await insertionSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Insertion Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It has a time complexity of O(n^2) but is efficient for small data sets or mostly sorted data.";
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});

// Event listener for the Count Sort button
document.getElementById('countSortButton').addEventListener('click', async () => {
    if (customArray.length > 0) {
        await countSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Count Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            "Count sort is a non-comparison sorting algorithm that sorts integers by counting the number of occurrences of each unique element. It has a time complexity of O(n + k), where k is the range of input values.";
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});

// Event listener for the Merge Sort button
document.getElementById('mergeSortButton').addEventListener('click', async () => {
    if (customArray.length > 0) {
        await mergeSort(customArray);
        // Change the algorithm name displayed
        document.getElementById('algorithmTitle').textContent = 'Merge Sort Algorithm';
        // Display algorithm details
        document.getElementById('algorithmInfo').textContent =
            "Merge sort is a divide-and-conquer sorting algorithm with a time complexity of O(n log n). It divides the input array into two halves, recursively sorts them, and then merges the sorted halves to produce a sorted output.";
        document.getElementById('algorithmInfo').style.visibility = 'visible';
    } else {
        alert('Please add elements to the array first.');
    }
});

// Implement sorting algorithms below
async function selectionSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j].weight < array[minIndex].weight) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            await swap(array, i, minIndex);
        }
    }
}
async function selectionSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j].weight < array[minIndex].weight) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            await swap(array, i, minIndex);
        }
    }
}
async function insertionSort(array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        let key = array[i].weight;
        let j = i - 1;

        while (j >= 0 && array[j].weight > key) {
            array[j + 1].weight = array[j].weight;
            j = j - 1;
            await sleep(100); // Add a delay for visualization
            visualizeArrayWithWeights(array);
        }

        array[j + 1].weight = key;
        await sleep(100); // Add a delay for visualization
        visualizeArrayWithWeights(array);
    }
}
async function countSort(array) {
    const n = array.length;
    let max = Math.max(...array.map(item => item.weight));
    let min = Math.min(...array.map(item => item.weight));

    const countArray = Array(max - min + 1).fill(0);

    for (let i = 0; i < n; i++) {
        countArray[array[i].weight - min]++;
    }

    let sortedIndex = 0;

    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            array[sortedIndex].weight = i + min;
            countArray[i]--;
            sortedIndex++;
            await sleep(100); // Add a delay for visualization
            visualizeArrayWithWeights(array);
        }
    }
}
async function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    await mergeSort(left);
    await mergeSort(right);
    await merge(left, right, array);
}
async function bubbleSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j].weight > array[j + 1].weight) {
                await swap(array, j, j + 1);
            }
        }
    }
}

async function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let arrayIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].weight < right[rightIndex].weight) {
            array[arrayIndex].weight = left[leftIndex].weight;
            leftIndex++;
        } else {
            array[arrayIndex].weight = right[rightIndex].weight;
            rightIndex++;
        }
        arrayIndex++;
        await sleep(100);
        visualizeArrayWithWeights(array);
    }

    // Handle remaining elements in left and right arrays
    while (leftIndex < left.length) {
        array[arrayIndex].weight = left[leftIndex].weight;
        leftIndex++;
        arrayIndex++;
        await sleep(100);
        visualizeArrayWithWeights(array);
    }

    while (rightIndex < right.length) {
        array[arrayIndex].weight = right[rightIndex].weight;
        rightIndex++;
        arrayIndex++;
        await sleep(100);
        visualizeArrayWithWeights(array);
    }
}

async function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && array[left].weight > array[largest].weight) {
        largest = left;
    }

    if (right < n && array[right].weight > array[largest].weight) {
        largest = right;
    }

    if (largest !== i) {
        await swap(array, i, largest);
        await heapify(array, n, largest);
    }
}

async function heapSort(array) {
    const n = array.length;

    // Build a max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(array, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i >= 0; i--) {
        await swap(array, 0, i);
        await heapify(array, i, 0);
    }
}


// Event listener for the Clear Input button
// Event listener for the Clear Input button
document.getElementById('clearInput').addEventListener('click', () => {
    const elementInput = document.getElementById('elementInput');
    elementInput.value = ''; // Clear the input field
    document.getElementById('algorithmTitle').textContent = 'Sorting Algorithm';
    document.getElementById('algorithmInfo').style.visibility = 'hidden';

    // Clear the visualization by resetting the customArray
    customArray = [];
    visualizeArrayWithWeights(customArray);

    // Hide algorithm info for all sorting buttons
    const sortingButtons = document.querySelectorAll('.sorting-button');
    sortingButtons.forEach(button => {
        button.removeEventListener('click', showAlgorithmInfo);
    });
});

// Event listener for the sorting buttons
const sortingButtons = document.querySelectorAll('.sorting-button');
sortingButtons.forEach(button => {
    button.addEventListener('click', async () => {
        if (customArray.length > 0) {
            // Get the algorithm name from the button
            const algorithmName = button.textContent.trim();
            const algorithmInfo = getAlgorithmInfo(algorithmName);

            // Change the algorithm name displayed
            document.getElementById('algorithmTitle').textContent = `${algorithmName} Algorithm`;

            // Display algorithm details
            document.getElementById('algorithmInfo').textContent = algorithmInfo;
            document.getElementById('algorithmInfo').style.visibility = 'visible';

            // Call the respective sorting function
            const sortingFunctionName = `${algorithmName.toLowerCase()}Sort`;
            await window[sortingFunctionName](customArray);
        } else {
            alert('Please add elements to the array first.');
        }
    });
});

// Function to get algorithm information based on the algorithm name
function getAlgorithmInfo(algorithmName) {
    switch (algorithmName) {
        case 'Bubble Sort':
            return "Bubble sort is a simple sorting algorithm with a time complexity of O(n^2) and a space complexity of O(1). It's primarily used for educational purposes due to its inefficiency for large datasets, but it can be practical for small datasets or nearly sorted data.";
        case 'Heap Sort':
            return "Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It has a time complexity of O(n log n) and is often used for its consistent performance across different input data distributions.";
        case 'Selection Sort':
            return "Selection sort is an in-place comparison sorting algorithm with a time complexity of O(n^2). It works by dividing the input list into two parts: the sorted and the unsorted subarray. It repeatedly selects the minimum element from the unsorted subarray and moves it to the end of the sorted subarray.";
        case 'Insertion Sort':
            return "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It has a time complexity of O(n^2) but is efficient for small data sets or mostly sorted data.";
        case 'Count Sort':
            return "Count sort is a non-comparison sorting algorithm that sorts integers by counting the number of occurrences of each unique element. It has a time complexity of O(n + k), where k is the range of input values.";
        case 'Merge Sort':
            return "Merge sort is a divide-and-conquer sorting algorithm with a time complexity of O(n log n). It divides the input array into two halves, recursively sorts them, and then merges the sorted halves to produce a sorted output.";
        default:
            return '';
    }
}

const elementInput = document.getElementById('elementInput');

// Event listener for the input field
elementInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        // Enter key was pressed, add the element to the array
        const element = parseInt(elementInput.value);

        if (!isNaN(element)) {
            customArray.push({
                weight: element,
                index: customArray.length
            });
            visualizeArrayWithWeights(customArray);
            elementInput.value = ''; // Clear the input field
        } else {
            alert('Invalid input. Please enter an integer element.');
        }
    }
});