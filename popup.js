let bypassStatus = false; 
toggleButton.addEventListener('click', () => {
  bypassStatus = !bypassStatus;
  if (bypassStatus) {
    toggleButton.textContent = 'Disable Bypass';
    bypassStatusElement.textContent = 'Bypass is ON';
  } else {
    toggleButton.textContent = 'Enable Bypass';
    bypassStatusElement.textContent = 'Bypass is OFF';
  }
});
