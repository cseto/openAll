var maintList = [
  //add url's here
  "http://www.google.com",
  "http://www.wordpress.net"
];

//comment out confirm to get out of quick start. Hitting return in the add site field triggers confirmOpen.
confirmOpen = confirm("Shall I open all the Contact Pages for maintenance?");

var openAll = function(){

	if (maintList.length == 0){
        alert("The maintenance URL list is empty.");
        
    } else {
    	
    	for (i = 0;i < maintList.length; i++) {

    		window.open(maintList[i]);
    	}
    };

};

//comment this out if confirmOpen is deactivated
if (confirmOpen == true) {
	openAll();
};

//working code. now to add loop function to go through array.
// var listAll = function(){
// 	var previousInnerHTML = new String();
// 	previousInnerHTML = document.getElementById('listSites').innerHTML;
// 	previousInnerHTML = previousInnerHTML.concat("<p><a href=>" + maintList[2] + "</a></p>");
// 	document.getElementById('listSites').innerHTML = previousInnerHTML;
// };

var clearDiv = function(){

//clear 'listSites' div in case there is already a list
document.getElementById('listSites').innerHTML="";	

};


var listAll = function(){

	var previousInnerHTML = new String();
	
	clearDiv();

//list all sites
for (var i = 0; i < maintList.length; i++) {	

	previousInnerHTML = document.getElementById('listSites').innerHTML;

	previousInnerHTML = previousInnerHTML.concat("<p>" + maintList[i].link(maintList[i]) + "</p>");

	document.getElementById('listSites').innerHTML = previousInnerHTML;
	
	};

//previousInnerHTML now has all sites as URL's in a new string, not an array.	
//alert(previousInnerHTML);

};


//add a site FORM
//check if url is valid. still accepts entries w/o http://. causing problems with the link created from the entry.
function isValidURL(url){
    
    var RegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    
    if(RegExp.test(url)){
    
        return true;
    
    }else{
    
        return false;
    
    }

}; 

var addSite = function(addThisSite){

	//validations

	if (addThisSite.length == 0) {

		alert("Please enter a URL in the field.");
	
	} else if ( isDuplicate(addThisSite) == true) {
		//check for duplicates
		alert("Looks like that site is already in the list!");
	
	} else if (isValidURL(addThisSite) == false) {
		//check for valid URL; .link requires http://; find another way to do it with needing to enter http://
		alert("Please enter the complete URL beginning with http://");
		
	} else {

	//add to sites list

	maintList.push(addThisSite);
	
	document.getElementById('addSitePanel').innerHTML= "<b><br />" + addThisSite + " has been added to the list</b>";

	//show the newly added site on the list

	listAll();

	};
};

//check new entry against entries in array
//PROBLEM: new entries aren't pushed to array? only added to string. OR it is only matching the 1st item in the array. 
function isDuplicate(url) {

	for (var i = 0; i < maintList.length; i++) {

		if ( url == maintList[i]){

			return true;

		} else { return false; };
		
	};
};
