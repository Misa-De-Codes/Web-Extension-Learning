let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
    trackTime(activeTabId); // Save time before switching tabs
    activeTabId = activeInfo.tabId;
    startTime = Date.now();
});

chrome.tabs.onRemoved.addListener(tabId => {
    if (tabId === activeTabId) {
        trackTime(activeTabId); // Save time before closing
        activeTabId = null;
    }
});

chrome.runtime.onStartup.addListener(() => {
    activeTabId = null;
    startTime = null;
});

function trackTime(tabId) {
    if (!tabId || !startTime) return;
    
    const timeSpent = (Date.now() - startTime) / 1000; // Convert ms to seconds

    chrome.tabs.get(tabId, tab => {
        if (chrome.runtime.lastError || !tab.url) return;
        
        const url = new URL(tab.url).hostname;
        
        chrome.storage.local.get([url], data => {
            const totalTime = (data[url] || 0) + timeSpent;
            chrome.storage.local.set({ [url]: totalTime });
        });
    });
}