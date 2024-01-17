// background.js
chrome.runtime.onInstalled.addListener(function () {

  chrome.contextMenus.create({
    id: "removeExtension",
    title: "Remove Extension",
    contexts: ["browser_action"],
    parentId: "extensionContextMenu"
  });

  chrome.contextMenus.create({
    id: "openGitHub",
    title: "Open GitHub Page",
    contexts: ["browser_action"],
    parentId: "extensionContextMenu"
  });

  // Context menu for right-click on web pages
  chrome.contextMenus.create({
    id: "googleSearch",
    title: "Search with Google",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "removeExtension") {
    chrome.management.uninstallSelf({ showConfirmDialog: true });
  } else if (info.menuItemId === "openGitHub") {
    chrome.tabs.create({ url: "https://github.com/kbkozlev/googleSearch" });
  } else if (info.menuItemId === "googleSearch" && info.selectionText) {
    searchWithGoogle(info.selectionText);
  }
});

function searchWithGoogle(query) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  chrome.tabs.create({ url: searchUrl });
}
