function openGitHubRepo() {
    chrome.tabs.create({ url: 'https://github.com/kbkozlev/GSearch' });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('githubButton').addEventListener('click', openGitHubRepo);
});

chrome.action.onClicked.addListener(function (tab) {
    openGitHubRepo();
});
