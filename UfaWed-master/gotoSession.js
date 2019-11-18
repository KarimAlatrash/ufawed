var date1 = new Date();
var date2;
var opened;

chrome.runtime.sendMessage({method: "getDate"}, function(response) {
  date2 = response.date;
  opened = response.open;
  if (date1 > Date.parse(date2) && !opened) {
    window.location.replace("https://wed.ufacademy.org/sessions.php");
  }
});
