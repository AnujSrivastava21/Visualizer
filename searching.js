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

        // Function to perform Linear Search and visualize the process with weights
        async function linearSearch(array, target) {
            for (let i = 0; i < array.length; i++) {
                // Highlight the element being compared
                const bar = document.getElementsByClassName('array-bar')[i];
                bar.style.backgroundColor = 'red';
        
                await sleep(700); // Delay for visualization
        
                if (array[i].weight === target) {
                    // Update the bar's properties for the found element
                    bar.style.backgroundColor = 'red'; // Set the background color to red
                    bar.style.color = 'white'; // Set the text color to white (for visibility)
                    bar.style.fontWeight = 'bold'; // Make the text bold
                    // You can add more style properties as needed
        
                    await sleep(500); // Adjust the delay duration as needed
                    visualizeArrayWithWeights(array);
                    return i;
                }
        
                // Reset the color after comparison if the element is not found
                bar.style.backgroundColor = '';
                bar.style.color = ''; // Reset the text color
                bar.style.fontWeight = ''; // Reset the font weight
            }
        
            // Element not found, return -1
            return -1;
        }
        
        
        
        
        

        // Function to perform Binary Search and visualize the process with weights
        async function binarySearch(array, target) {
            let left = 0;
            let right = array.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const midElement = array[mid].weight;

                // Highlight the middle element being compared
                const midBar = document.getElementsByClassName('array-bar')[mid];
                midBar.style.backgroundColor = 'purple';

                if (midElement === target) {
                    // Return the index of the found element and reset the color
                    midBar.style.backgroundColor = 'red';
                    await sleep(700); // Delay to visualize the result
                    visualizeArrayWithWeights(array);
                    // Update the message in the <p> element
                    document.getElementById('sortReminder').textContent = `Element ${target} found at index ${mid}.`;
                    return mid;
                } else if (midElement < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

                await sleep(700); // Delay for visualization

                // Reset the color after comparison
                midBar.style.backgroundColor = '';
            }

            // Element not found, return -1
            // Update the message in the <p> element
           
            return -1;
        }

       // Function to add a delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Event listener for the Linear Search button
// Event listener for the Linear Search button
document.getElementById('linearSearchButton').addEventListener('click', async () => {
    const targetInput = document.getElementById('targetInput');
    const target = parseInt(targetInput.value);

    if (!isNaN(target)) {
        // Change the name of the search visualizer
        document.querySelector('h1').textContent = 'Linear Search Visualizer';

        // Update the message paragraph with time complexity and space complexity
        const timeComplexity = 'O(n)'; // Replace with the actual time complexity
        const spaceComplexity = 'O(1)'; // Replace with the actual space complexity
        document.getElementById('sortReminder').innerHTML = `Linear search is employed in small unsorted data sets, ideal for debugging and sequential access tasks.<br>Time Complexity: ${timeComplexity}, Space Complexity: ${spaceComplexity}`;
        
        const foundIndex = await linearSearch(customArray, target);
        if (foundIndex !== -1) {
            alert(`Element ${target} found at index ${foundIndex}`);
        }
    } else {
        alert('Invalid input. Please enter an integer element to search.');
    }
});

// Event listener for the Binary Search button
// Event listener for the Binary Search button
// Event listener for the Binary Search button
// Event listener for the Binary Search button
document.getElementById('binarySearchButton').addEventListener('click', async () => {
    const targetInput = document.getElementById('targetInput');
    const target = parseInt(targetInput.value);

    if (!isNaN(target)) {
        // Check if the array is sorted before proceeding with binary search
        if (isSorted(customArray)) {
            // Change the name of the search visualizer
            document.querySelector('h1').textContent = 'Binary Search Visualizer';

            // Update the message paragraph with time complexity and space complexity
            const timeComplexity = 'O(log n)'; // Binary search time complexity
            const spaceComplexity = 'O(1)'; // Binary search space complexity
            document.getElementById('sortReminder').innerHTML = `Binary search is efficient for sorted data sets.<br>Time Complexity: ${timeComplexity}, Space Complexity: ${spaceComplexity}`;

            // Sort the array for binary search (binary search requires a sorted array)
            customArray.sort((a, b) => a.weight - b.weight);

            const foundIndex = await binarySearch(customArray, target);
            if (foundIndex !== -1) {
                alert(`Element ${target} found at index ${foundIndex}`);
            }
        } else {
            // Display an error message if the array is not sorted
            alert('Error: Array is not sorted. Please sort the array before using binary search.');
        }
    } else {
        alert('Invalid input. Please enter an integer element to search.');
    }
});

// Function to check if the array is sorted
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i].weight < array[i - 1].weight) {
            return false;
        }
    }
    return true;
}





        // Event listener for the Reset button
        document.getElementById('resetButton').addEventListener('click', () => {
            customArray = [];
            visualizeArrayWithWeights(customArray);
            document.getElementById('targetInput').value = '';
            // Reset the message in the <p> element
            document.getElementById('sortReminder').textContent = 'Please ensure that your array is sorted before using binary search, as binary search requires a sorted array.';
        });
        // Get a reference to the strong element
// Get references to the elements
const animatedText = document.getElementById('animatedText');
const strongElement = document.querySelector('strong');

// Set the content for the animated text
animatedText.textContent = 'as binary search requires a sorted array.';

// Define the typewriter animation for the animated text
animatedText.style.display = 'inline-block';
animatedText.style.whiteSpace = 'nowrap';
animatedText.style.overflow = 'hidden';
animatedText.style.borderRight = '2px solid #00ff00';
animatedText.style.animation = 'typewriter 3s steps(40) infinite';

// Create the typewriter animation for the strong element
strongElement.style.animation = 'none'; // Disable the animation on the 'array' text

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