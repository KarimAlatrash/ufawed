var date1 = new Date();
var date2 = "Thu Mar 30 2017 21:40:34 GMT-0400 (Eastern Daylight Time)";
var dunno = localStorage["dunno"];

if(!localStorage["dunno"])


if(!localStorage["sessionA"])
localStorage["sessionA"] = "Not Pre-Registered";

if(!localStorage["sessionB"])
localStorage["sessionB"] = "Not Pre-Registered";

if(!localStorage["sessionC"])
localStorage["sessionC"] = "Not Pre-Registered";

if(!localStorage["sessionD"])
localStorage["sessionD"] = "Not Pre-Registered";

if(localStorage["date2"])
  date2 = localStorage["date2"];

var opened = false;

function showSessions(){
  alert("A: " + localStorage["sessionA"] + "\nB: " + localStorage["sessionB"]+ "\nC: " + localStorage["sessionC"]+ "\nD: " + localStorage["sessionD"]);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.method == "setAutoLogin"){
      localStorage["autoLogin"] = request.autoLogin;
    }
    if (request.method == "getAutoLogin"){
      if(date1 > Date.parse(date2) && !dunno){
        sendResponse({autoLog: "true"});
      }else{
      sendResponse({autoLog: localStorage["autoLogin"]});
    }
    }else if (request.method == "sendSessions"){
        if(request.period == "A"){
          localStorage["sessionA"] = request.sess;
        }else if(request.period == "B"){
          localStorage["sessionB"] = request.sess;

          }else if(request.period == "C"){
            localStorage["sessionC"] = request.sess;

            }else if(request.period == "D"){
              localStorage["sessionD"] = request.sess;

        }

    }else if (request.method == "getDate"){
      sendResponse({date: date2, open: opened});
    }else if(request.method == "createRegisteredNotification"){
      dunno = true;
      localStorage["dunno"] = dunno;
    chrome.notifications.create(
      'registrationComplete',{
      type: 'basic',
      iconUrl: 'icons/48x48.png',
      title: "You were registered for:",
      message: ("A: " + request.sessionA + "\nB: " + request.sessionB + "\nC: " + request.sessionC + "\nD: " + request.sessionD)
      },

  function() {}

  );
}
    else
      sendResponse({});
});

window.setInterval(function(){
  date1 = new Date();
  var timeType;

  if (date1 > Date.parse(date2) && !opened && !dunno) {
    chrome.windows.create({url: "https://wed.ufacademy.org/sessions.php"});
    opened = true;
  } else if (!opened && !dunno){
    var diff =  Math.floor(( Date.parse(date2) - date1 ) / 86400000);
    chrome.browserAction.setBadgeText({text: diff+1+"d"});
    timeType = "Day"
    if(diff < 1){
      diff  = Math.floor( ( Date.parse(date2) - date1 ) /  3600000 %   24 );
      chrome.browserAction.setBadgeText({text: diff+"h"});
          timeType = "Hour"
      if(diff < 1){
        diff  = Math.floor( ( Date.parse(date2) - date1 ) /    60000 %   60 );
        chrome.browserAction.setBadgeText({text: diff+"m"});
        timeType = "Minute"
        if(diff < 1){
          diff  = Math.floor( ( Date.parse(date2) - date1 ) /     1000 %   60 );
          chrome.browserAction.setBadgeText({text: diff+"s"});
          timeType = "Second"
        }
      }
    }
  }else{
    chrome.browserAction.setBadgeText({text: "!"});
  }
  chrome.runtime.sendMessage({method: "timeToOpen", timeDiff: diff, timeT: timeType, dun: dunno}, function(response) {});
}, 1000);
