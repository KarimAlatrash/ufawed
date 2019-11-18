//showing sessions in popup

document.getElementsByTagName("h1")[0].innerText="";
if(localStorage["sessionA"]){document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "A: " + localStorage["sessionA"];} else {document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "A: Not Registered"}
if(localStorage["sessionB"]){document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nB: " + localStorage["sessionB"];} else {document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nB: Not Registered"}
if(localStorage["sessionC"]){document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nC: " + localStorage["sessionC"];} else {document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nC: Not Registered"}
if(localStorage["sessionB"]){document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nD: " + localStorage["sessionD"];} else {document.getElementsByTagName("h1")[0].innerText=document.getElementsByTagName("h1")[0].innerText + "\nD: Not Registered"}



//document.getElementsByTagName("h1")[0].innerText=("A: " + localStorage["sessionA"] + "\nB: " + localStorage["sessionB"] + "\nC: " + localStorage["sessionC"] + "\nD: " + localStorage["sessionD"]);

document.getElementsByTagName("h1")[0].style="font-family: Helvetica; color: #003366; font-weight: 20px;";
document.getElementsByTagName("title")[0].innerText="Pre-Regisered Sessions"
document.getElementsByTagName("center")[1].innerText="";
