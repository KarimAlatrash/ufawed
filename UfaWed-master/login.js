	var username;
	var password;

	if(document.getElementById("loginpanel").getElementsByTagName("DIV")[2].innerText == "invalid student ID or password"){
    localStorage["H5c1Ga8mnX"] = "";
    localStorage["RrhK6gDOFl"] = "";
    alert("Invalid student ID or password, please enter valid login details");
    }
	if(localStorage["H5c1Ga8mnX"] && localStorage["RrhK6gDOFl"]){
	username = localStorage["H5c1Ga8mnX"];
	password = localStorage["RrhK6gDOFl"];

	}else{

	username = window.btoa(prompt("Enter your username"));
	password = window.btoa(prompt("Enter your password"));
	localStorage["H5c1Ga8mnX"] = username;
	localStorage["RrhK6gDOFl"] = password;
	}

chrome.runtime.sendMessage({method: "getAutoLogin"}, function(response) {
		if(response.autoLog == "true" || response.autoLog == "undefined"){
	document.getElementById('login').value=window.atob(username);
	document.getElementsByClassName('inp')[1].value=window.atob(password);
	document.getElementsByClassName('button')[0].click();
	}
});
