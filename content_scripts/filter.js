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
                chrome.i18n.detectLanguage(jobListingText, function(result) {
                    if (result.isReliable && !(request.languageDict.includes(result.languages[0].language))) {
                      jobListing.remove();
                    }
                  });
            }
        }
});
