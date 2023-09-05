document.addEventListener("DOMContentLoaded", function() {
    // Code for the first container with stack size input
    const stackSizeInput = document.querySelector("#stackSize");
    const stackElements = [];
    const h1Text = "What is Stack?";
    const h1Element = document.querySelector("h1");

    let charIndex = 0;
    let typingInterval;

    function startTypingAnimation() {
        charIndex = 0; // Reset the character index when starting over
        h1Element.textContent = ""; // Clear the text
        typingInterval = setInterval(function() {
            if (charIndex < h1Text.length) {
                h1Element.textContent += h1Text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval); // Stop the typing animation
                setTimeout(startTypingAnimation, 2000); // Restart after a 2-second delay
            }
        }, 100); // Adjust the speed of typing by changing the interval (e.g., 100 milliseconds)
    }

    startTypingAnimation(); 

    document.querySelector("#pushButton").addEventListener("click", function() {
        const stackSize = parseInt(stackSizeInput.value);

        if (isNaN(stackSize)) {
            alert("Please enter a valid stack size.");
            return;
        }

        if (stackElements.length >= stackSize) {
            alert("Stack is full.");
            return;
        }

        const randomValue = Math.floor(Math.random() * 1000); // Generate a random number
        const newElement = document.createElement("div");
        newElement.className = "stack-element";
        newElement.textContent = randomValue;
        stackElements.push(randomValue);
        document.querySelector(".rectangle").prepend(newElement);
        updateStackHeight();
    });

    document.querySelector("#popButton").addEventListener("click", function() {
        if (stackElements.length === 0) {
            alert("Stack is empty.");
            return;
        }

        stackElements.pop();
        const stackElement = document.querySelector(".stack-element");
        document.querySelector(".rectangle").removeChild(stackElement);
        updateStackHeight();
    });

    function updateStackHeight() {
        const stackElements = document.querySelectorAll(".stack-element");
        const stackHeight = Array.from(stackElements).reduce((height, element) => height + element.offsetHeight + 5, 0);
        document.querySelector(".rectangle").style.height = `${stackHeight}px`;
    }

    // Code for the second container with input field
    const stackContainer = document.getElementById("stack");
    const stackInput = document.getElementById("stackInput");
    const pushButton = document.getElementById("pushButton");
    const popButton = document.getElementById("popButton");
    const stack = [];

    pushButton.addEventListener("click", function() {
        pushElement();
    });

    popButton.addEventListener("click", function() {
        popElement();
    });

    stackInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the Enter key from submitting the form
            pushElement();
        } else if (event.key === "Backspace") {
            event.preventDefault(); // Prevent the Backspace key from navigating back
            popElement();
        }
    });

    function pushElement() {
        const value = stackInput.value.trim();
        if (value !== "") {
            const element = document.createElement("div");
            element.className = "stack-element";
            element.textContent = value;
            stack.push(value);
            stackContainer.prepend(element);
            stackInput.value = "";
        }
    }

    function popElement() {
        if (stack.length > 0) {
            const removedValue = stack.pop();
            const stackElement = stackContainer.querySelector(".stack-element");
            stackContainer.removeChild(stackElement);
            stackInput.value = removedValue;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const stackContainer = document.getElementById("stack");
    const stackInput = document.getElementById("stackInput");
    const pushButton = document.getElementById("pushButton");
    const popButton = document.getElementById("popButton");
    const peekButton = document.getElementById("peekButton");
    const stack = [];

    pushButton.addEventListener("click", function() {
        pushElement();
    });

    popButton.addEventListener("click", function() {
        popElement();
    });

    peekButton.addEventListener("click", function() {
        peekElement();
    });

    stackInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the Enter key from submitting the form
            pushElement();
        } else if (event.key === "Backspace") {
            event.preventDefault(); // Prevent the Backspace key from navigating back
            popElement();
        }
    });

    function pushElement() {
        const value = stackInput.value.trim();
        if (value !== "") {
            const element = document.createElement("div");
            element.className = "stack-element";
            element.textContent = value;
            stack.push(value);
            stackContainer.prepend(element);
            stackInput.value = "";
        }
    }

    function popElement() {
        if (stack.length > 0) {
            const removedValue = stack.pop();
            const stackElement = stackContainer.querySelector(".stack-element");
            stackContainer.removeChild(stackElement);
            stackInput.value = removedValue;
        }
    }

    function peekElement() {
        if (stack.length > 0) {
            const topElement = stackContainer.querySelector(".stack-element");
            topElement.style.backgroundColor = "red";
            setTimeout(() => {
                topElement.style.backgroundColor = "red"; // Reset color after a brief delay
            }, 1000); // Change back to lightgreen after 1 second
        }
    }
});
