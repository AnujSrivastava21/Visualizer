document.addEventListener("DOMContentLoaded", function() {
    const queueContainer = document.querySelector(".rectangle");
    const queueInput = document.getElementById("queueInput");
    const enqueueButton = document.getElementById("enqueueButton");
    const dequeueButton = document.getElementById("dequeueButton");
    const peekButton = document.getElementById("peekButton");
    const queue = [];
    const h1Text = "What is Queue?";
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

    enqueueButton.addEventListener("click", function() {
        enqueueElement();
    });

    dequeueButton.addEventListener("click", function() {
        dequeueElement();
    });

    peekButton.addEventListener("click", function() {
        peekElement();
    });

    queueInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the Enter key from submitting the form
            enqueueElement();
        }
    });

    function enqueueElement() {
        const value = queueInput.value.trim();
        if (value !== "") {
            const element = document.createElement("div");
            element.className = "stack-element";
            element.textContent = value;
            queue.push(value);
            queueContainer.appendChild(element);
            queueInput.value = "";
        }
    }

    function dequeueElement() {
        if (queue.length > 0) {
            const removedValue = queue.shift();
            const queueElement = queueContainer.querySelector(".stack-element");
            queueContainer.removeChild(queueElement);
            queueInput.value = removedValue;
        }
    }

    function peekElement() {
        if (queue.length > 0) {
            const frontElement = queueContainer.querySelector(".stack-element");
            frontElement.style.backgroundColor = "red";
            setTimeout(() => {
                frontElement.style.backgroundColor = "#00ff00"; // Reset color after a brief delay
            }, 1000); // Change back to lightgreen after 1 second
        }
    }
});
