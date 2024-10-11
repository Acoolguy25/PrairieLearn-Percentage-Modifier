// Function to modify progress bar text content and remove specific elements
function updateProgressBars() {
    document.querySelectorAll(".progress-bar.bg-success").forEach((element) => {
        element.style.width = "100%";
        element.textContent = "100%";
    });
    // Remove elements with specified classes
    document.querySelectorAll(".d-flex.flex-column.justify-content-center.text-center").forEach((element) => element.remove());
}

// Run `updateProgressBars` in sync with the browser’s paint cycle
function updateUntilStable() {
    updateProgressBars();
    requestAnimationFrame(updateUntilStable);  // Keep updating every frame
}

// Start updating immediately
requestAnimationFrame(updateUntilStable);

// Stop updating after 5 seconds once the changes are likely persistent
setTimeout(() => {
    cancelAnimationFrame(updateUntilStable);
}, 1000);
