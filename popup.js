const toggleButton = document.getElementById('toggleButton');
const bypassStatusElement = document.getElementById('bypassStatus');
const outerCircle = document.querySelector('.outer-circle');
const onCircle = document.querySelector('.on');
const offCircle = document.querySelector('.off');

// Set initial state to false (OFF)
let bypassStatus = false;

// Function to update the toggle status
function updateToggleStatus() {
  if (toggleButton.checked) {
    bypassStatus = true;
    bypassStatusElement.textContent = 'Bypass is ON';
    // Move the "on" circle to the right
    outerCircle.style.transform = 'translateX(40px)';
  } else {
    bypassStatus = false;
    bypassStatusElement.textContent = 'Bypass is OFF';
    // Move the "on" circle back to the left
    outerCircle.style.transform = 'translateX(0)';
  }
}

// Call the function to set initial state
updateToggleStatus();

// Add event listener for the toggle button
toggleButton.addEventListener('change', updateToggleStatus);
