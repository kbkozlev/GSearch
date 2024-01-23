chrome.runtime.onInstalled.addListener(function () {
  createContextMenu("googleSearch", "Search with Google", ["selection"]);
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "googleSearch" && info.selectionText) {
    searchWithGoogle(info.selectionText);
  }
});

function createContextMenu(id, title, contexts) {
  chrome.contextMenus.create({
    id: id,
    title: title,
    contexts: contexts,
  });
}

function searchWithGoogle(query) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  chrome.tabs.create({ url: searchUrl }, function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    }
  });
}
