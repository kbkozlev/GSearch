chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "googleSearch",
    title: "Search with Google",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "googleSearch" && info.selectionText) {
    searchWithGoogle(info.selectionText);
  }
});

function searchWithGoogle(query) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  chrome.tabs.create({ url: searchUrl });
}
