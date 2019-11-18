chrome.runtime.sendMessage({method: "getAutoLogin"}, function(response) {
	if(response.autoLog == undefined){
		chrome.runtime.sendMessage({method: "setAutoLogin", autoLogin: true}, function(response) {});
		document.getElementById("checkboxid").checked = true;
		return;
	}
	if(response.autoLog == "true"){ //fml this shit makes me wanna die
		document.getElementById("checkboxid").checked = true;
	}else{
		document.getElementById("checkboxid").checked = false;
	}
});

	function changeCheckBox(bool){


	}

	function alertSessions() {
		chrome.extension.getBackgroundPage().showSessions();
	}

	function resetInfo() {
  chrome.tabs.create({ url: "https://wed.ufacademy.org/reset" });
	alert("Login information reset, please go to wed.ufacademy.org/login.php to set them again.");
	}

  document.addEventListener('resetLogin', function () {
  document.getElementById('resetLogin')
      .addEventListener('click', resetInfo);
    });

	function openWed() {
	chrome.tabs.create({ url: "https://wed.ufacademy.org/" });

	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	    if (request.method == "timeToOpen"){
				document.getElementById('openTime').innerText=request.timeDiff + " " + request.timeT + "(s)";
			if(request.dun){
				document.getElementById('openTime').innerText="";
			}
			}
	});
document.getElementById('gotoWed').addEventListener('click', openWed);
document.getElementById('displaySessions').addEventListener('click', alertSessions);
document.getElementById('resetLogin').addEventListener('click', resetInfo);
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=checkbox-1]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
            chrome.runtime.sendMessage({method: "setAutoLogin", autoLogin: true}, function(response) {});
        } else {
						chrome.runtime.sendMessage({method: "setAutoLogin", autoLogin: false}, function(response) {});
        }
    });
});
