chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log('This is in the message listener')
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
});