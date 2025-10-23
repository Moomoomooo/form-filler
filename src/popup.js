document.addEventListener('DOMContentLoaded', function() {
  const executeButton = document.getElementById('execute');
  executeButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['content.js']
      });
    });
  });
});
