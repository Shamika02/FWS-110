
var j =document.createElement("h1");
var k = document.createTextNode("I am learning Javascript.");
j.appendChild(k);
document.body.appendChild(j);

var s =document.createElement("p");
var t = document.createTextNode("I am learning Javascript. I hope i get the hang of this and become a great web developer.");
s.appendChild(t);
document.body.appendChild(s);

var myNodelist = document.getElementsByTagName("Si");
var i;
for (i = 0; i <4; i++) {
  document.write("This is my first javascript list" + i +"<br>");
  
}

var footer = document.createElement("footer");
footer.textContent ="Created by Shamika Sims";
footer.style. textAlign = "center"
document.body.appendChild(footer);


  var links=document.getElementById('navbar').getElementsByTagName("a");
  var current = location.href;





