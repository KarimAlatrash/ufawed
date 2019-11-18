var date1 = new Date();
var date2;
var sessionid;
var sessiontitle;
var filters;
chrome.runtime.sendMessage({method: "getDate"}, function(response) {
  date2 = response.date;
  opened = response.open;
  if (date1 > Date.parse(date2) && !opened) {
    if(localStorage["sessionA"]){
    //sessionid = localStorage["sessionA"].something;
    //sessiontitle = localStorage["sessionA"].something;
    //filters = localStorage["sessionA"].something;
    //location.href="javascript:ajxpgn('list','services.php?cmd=registersession&sessionid='+sessionid+'&'+filters,0,0,'sessions='+sessions,function(){ajxpgn('mysignups','services.php?cmd=showreginfo'+'&page='+document.navpage+'&'+filters); void 0";
    }

    if(localStorage["sessionB"]){
    //sessionid = localStorage["sessionB"].something;
    //sessiontitle = localStorage["sessionB"].something;
    //filters = localStorage["sessionB"].something;
    //location.href="javascript:ajxpgn('list','services.php?cmd=registersession&sessionid='+sessionid+'&'+filters,0,0,'sessions='+sessions,function(){ajxpgn('mysignups','services.php?cmd=showreginfo'+'&page='+document.navpage+'&'+filters); void 0";
    }

    if(localStorage["sessionC"]){
    //sessionid = localStorage["sessionC"].something;
    //sessiontitle = localStorage["sessionC"].something;
    //filters = localStorage["sessionC"].something;
    //location.href="javascript:ajxpgn('list','services.php?cmd=registersession&sessionid='+sessionid+'&'+filters,0,0,'sessions='+sessions,function(){ajxpgn('mysignups','services.php?cmd=showreginfo'+'&page='+document.navpage+'&'+filters); void 0";
    }

    if(localStorage["sessionD"]){
      //sessionid = localStorage["sessionD"].something;
      //sessiontitle = localStorage["sessionD"].something;
      //filters = localStorage["sessionD"].something;
      //location.href="javascript:ajxpgn('list','services.php?cmd=registersession&sessionid='+sessionid+'&'+filters,0,0,'sessions='+sessions,function(){ajxpgn('mysignups','services.php?cmd=showreginfo'+'&page='+document.navpage+'&'+filters); void 0";
    }
  }

chrome.runtime.sendMessage({method: "createRegisteredNotification", sessionA: localStorage["sessionA"], sessionB: localStorage["sessionB"], sessionC: localStorage["sessionC"], sessionD: localStorage["sessionD"]}, function(response) {
  window.close();
});
});
