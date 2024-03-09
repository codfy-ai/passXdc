// Function to hide the modal overlay
const hideModalOverlay = () => {
  // Find the element with the id waffles-portal-root
  const wafflesPortalRoot = document.getElementById('waffles-portal-root');

  // Check if the waffles portal root exists
  if (wafflesPortalRoot) {
    // Find the modal overlay div inside waffles portal root
    const modalOverlay = wafflesPortalRoot.querySelector('.css-kmdqtr');

    // Check if the modal overlay exists
    if (modalOverlay) {
      // Set the display property to none to hide the modal overlay
      modalOverlay.style.display = 'none';
    }
  }
};

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // A child node has been added or removed
      // Check if the modal overlay has been added
      if (mutation.addedNodes.length > 0) {
        hideModalOverlay();
      }
    }
  }
});

// Start observing changes in the #waffles-portal-root element
const wafflesPortalRoot = document.getElementById('waffles-portal-root');
if (wafflesPortalRoot) {
  observer.observe(wafflesPortalRoot, { childList: true, subtree: true });
}

// Call hideModalOverlay initially in case the modal is already present
hideModalOverlay();
