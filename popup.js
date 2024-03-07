const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ]
});

const readingTimeElement = document.getElementById('readingTime');
const toggleButton = document.getElementById('toggleButton');
const bypassStatusElement = document.getElementById('bypassStatus');

// Calculate Reading Time (you can use your existing code here)
const article = document.querySelector("article");
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  readingTimeElement.textContent = `⏱️ ${readingTime} min read`;
}

// Toggle Bypass
let bypassStatus = false;
toggleButton.addEventListener('click', () => {
  bypassStatus = !bypassStatus;
  if (bypassStatus) {
    toggleButton.textContent = 'Disable Bypass';
    bypassStatusElement.textContent = 'Bypass is ON';
    // Add your code here to activate bypass
  } else {
    toggleButton.textContent = 'Enable Bypass';
    bypassStatusElement.textContent = 'Bypass is OFF';
    // Add your code here to deactivate bypass
  }
});
