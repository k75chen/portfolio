// Declare the observer variable using const to ensure it is block-scoped
const observer = new IntersectionObserver((entries) => {
    // Iterate over each entry in the IntersectionObserver entries
    entries.forEach((entry) => {
        // Log the entry to the console for debugging purposes
        console.log(entry);
        // Check if the element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Add the 'show' class to the element if it is intersecting
            entry.target.classList.add('show');
        } else {
            // Remove the 'show' class if the element is not intersecting
            entry.target.classList.remove('show');
        }
    });
});

// Declare the hiddenElements variable using const to ensure it is block-scoped
const hiddenElements = document.querySelectorAll('.hidden, .hidden1, .hidden2');
// Observe each hidden element using the observer
hiddenElements.forEach((el) => {
    observer.observe(el); // Ensure the observe method is called with parentheses
});