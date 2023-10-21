document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#filter-button").addEventListener("click", function() {

        var english = document.querySelector("#English").checked;
        var spanish = document.querySelector("#Spanish").checked;
        var french = document.querySelector("#French").checked;
        var danish = document.querySelector("#Danish").checked;
        var languageDict = [];
        if (english == true) {
            languageDict.push("en");
        }
        if (spanish == true) {
            languageDict.push("es");
        }
        if (french == true) {
            languageDict.push("fr");
        }
        if (danish == true) {
            languageDict.push("da");
        }

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            chrome.tabs.sendMessage(tab.id,{message: "filterJobs", languageDict: languageDict} );
        });
    });
});