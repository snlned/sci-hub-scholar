let sciHubUrl = 'https://sci-hub.se/';

function addLinksList(aResult) {
	let newLinkList = document.createElement('div');
	newLinkList.classList.add('gs_ggs');
	newLinkList.classList.add('gs_fl');
	aResult.insertBefore(newLinkList, aResult.firstChild);
	return newLinkList;
}

function modifyResult(aResult) {
	if (aResult.getElementsByClassName("gs_ggs gs_fl").length != 0) { //Links list already exists
	linksList = aResult.getElementsByClassName("gs_ggs gs_fl")[0];
	}
	else{
	linksList = addLinksList(aResult);
	}
	
	//Get the link of result
	let resultTitle = aResult.getElementsByClassName("gs_rt")[0];
	let _href = resultTitle.getElementsByTagName('a')[0].getAttribute("href");
	
	//Add sci-hub link
	let newLinkContainer = document.createElement('div');
	newLinkContainer.classList.add('gs_or_ggsm');
	linksList.appendChild(newLinkContainer);
	
	let newLink = document.createElement('a');
	let linkText = document.createTextNode("[sci-hub]");
	newLink.appendChild(linkText);
	newLink.href = sciHubUrl + _href;
	
	newLinkContainer.appendChild(newLink);	
}

if(document.URL.search('scholar.google') != -1){
	let allResults = document.body.getElementsByClassName("gs_r gs_or gs_scl");
	for (i=0; i<allResults.length; i++){ modifyResult(allResults[i]); }
}

