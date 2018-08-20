'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#800000	'}, function() {
    console.log("The color is green.");
  });
  //The browser will now show a full-color page action icon in the browser toolbar when users navigate to a URL that contains "developer.chrome.com". When the icon is full-color, users can click it to view popup.html.
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});