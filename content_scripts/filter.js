
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {

        if (request.message === "filterJobs") {

            var jobListings = document.querySelectorAll("li.css-5lfssm");

            for (var i = 0; i < jobListings.length; i++) {
                var jobListing = jobListings[i];
                var jobListingCopy = jobListing.cloneNode(true);
                var childNodesToRemove = jobListingCopy.querySelectorAll(".companyName, .companyLocation, .date, .tab-container");
                childNodesToRemove.forEach(function(childNode) {
                  childNode.remove();
                });
                var jobListingText = jobListingCopy.textContent;
                console.log(jobListingText);
                chrome.i18n.detectLanguage(jobListingText, function(result) {
                    console.log(result);
                    console.log(!(request.languageDict.includes(result.languages[0].language)));
                    if (result.isReliable && !(request.languageDict.includes(result.languages[0].language))) {
                      jobListing.remove();
                      console.log("removed");
                    }
                  });
            }
        }
});
