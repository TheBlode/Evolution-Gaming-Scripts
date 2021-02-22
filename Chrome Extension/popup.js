// Add event handler for on click event to start bot
document.getElementById("start").onclick = function() {
    // Store the start variable in memory so the main bot listener can pick it up
    chrome.storage.local.set({"start": "1"}, function () { window.alert(`The bot is about to start! Have fun!`)});
};
