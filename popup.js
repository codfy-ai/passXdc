const readingTimeElement = document.getElementById('readingTime');
const toggleButton = document.getElementById('toggleButton');
const bypassStatusElement = document.getElementById('bypassStatus');

const article = document.querySelector("article");
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  readingTimeElement.textContent = `⏱️ ${readingTime} min read`;
}

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
