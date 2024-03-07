const toggleButton = document.getElementById('toggleButton');
const bypassStatusElement = document.getElementById('bypassStatus');

const updateBadgeText = async () => {
  const bypassStatus = toggleButton.checked;
  const badgeText = bypassStatus ? 'ON' : 'OFF';
  chrome.action.setBadgeText({ text: badgeText });
  bypassStatusElement.textContent = `Bypass is ${badgeText}`;
};

updateBadgeText();

toggleButton.addEventListener('change', () => {
  updateBadgeText();
});
