chrome.runtime.onInstalled.addListener(() => {
  console.log('runtime onInstalled....');
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log('bookmarks onCreated....');
});

