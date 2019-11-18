

 var odd = document.getElementsByClassName('historyrow odd').length;
 var even = document.getElementsByClassName('historyrow even').length;
  document.getElementById("transcriptpdf").innerText = "Show Courses";
  document.getElementById("transcriptpdf").removeAttribute("href");
  document.getElementById("transcriptpdf").onclick = function(){
	displaySessions();
	}
  for(var i = 0; i < (odd); i++){
	var btn = document.createElement("BUTTON");
	btn.id = "PRButton" + i;
	btn.onclick = function(){
	preRegister(this);
	}
	btn.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#1CBBB4;color:#ffffff;";
	var t = document.createTextNode("Pre-Register");       // Create a text node
	btn.appendChild(t);
	var foo = document.getElementsByClassName('historyrow odd')[i];
	//Append the element in page (in span).

	foo.appendChild(btn);
	if(localStorage["session" + btn.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1)] == ("registerSession(" + btn.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + btn.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + btn.parentElement.getElementsByClassName("histcategory")[0].innerText + ");")){
		btn.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#f26c4f;color:#ffffff;";
		btn.innerText = "Un-Register";
		btn.onclick = function(){
		unRegister(this);
		}
	}
  }

  for(var i = 0; i < (even); i++){
	var btn = document.createElement("BUTTON");
	btn.id = "PRButton" + i;
	btn.onclick = function(){
	preRegister(this);
	}
	btn.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#1CBBB4;color:#ffffff;";
	var t = document.createTextNode("Pre-Register");       // Create a text node
	btn.appendChild(t);
	var foo = document.getElementsByClassName('historyrow even')[i];
	//Append the element in page (in span).

	foo.appendChild(btn);
	if(localStorage["session" + btn.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1)] == ("registerSession(" + btn.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + btn.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + btn.parentElement.getElementsByClassName("histcategory")[0].innerText + ");")){
		btn.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#f26c4f;color:#ffffff;";
		btn.innerText = "Un-Register";
		btn.onclick = function(){
		unRegister(this);
		}
	}
  }

function preRegister(elem) {
		var session = localStorage["session" + elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1)];
		console.log(session);
		if(session){
		var r = confirm("Your selection will override a previous selection. \nContinue?");
		if (r == false) {
			return;
		}
		}
		localStorage["session" + elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1)] = ("registerSession(" + elem.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histcategory")[0].innerText + ");");
    localStorage.setItem("session" + elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1), ("registerSession(" + elem.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histcategory")[0].innerText + ");"));
    //alert("registerSession(" + elem.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histcategory")[0].innerText + ");");
		elem.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#f26c4f;color:#ffffff;";
		elem.innerText = "Un-Register";
		elem.onclick = function(){
		unRegister(this);
		}
    chrome.runtime.sendMessage({method: "sendSessions", period: elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1), sess: ("registerSession(" + elem.parentElement.getElementsByClassName("histyear")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histteacher")[0].innerText + ", " + elem.parentElement.getElementsByClassName("histcategory")[0].innerText + ");")}, function(response) {});
		if(r == true)
		location.reload();
	}

	function unRegister(elem) {
		localStorage["session" + elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1)] = "";
		//alert("Un-Registered");
		elem.style = "border-radius:20px;width:auto;padding:7px 14px;margin-bottom:0px;background:#1CBBB4;color:#ffffff;";
		elem.innerText = "Pre-Register";
		elem.onclick = function(){
		preRegister(this);
		}
    chrome.runtime.sendMessage({method: "sendSessions", period: elem.parentElement.getElementsByClassName("histperiod")[0].innerText.substring(1), sess: "Not Pre-Registered"}, function(response) {});
	}


function displaySessions(){
		alert("A: " + localStorage["sessionA"] + "\nB: " + localStorage["sessionB"]+ "\nC: " + localStorage["sessionC"]+ "\nD: " + localStorage["sessionD"]);

}
