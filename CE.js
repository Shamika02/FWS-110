document.title="Shamika's Week2 Website";
let myBody = document.querySelector("body");
let header =document.createElement("header");
let nav = document.createElement("nav");
let navOl = document.createElement("ol");
let h1 ="Welcome to my JS site" ("h1");
h1.style.textAlign = "center"
myBody.append(h1);

let p = document.createElement("p");
p.textContent = "This is the beginning of my journey in the new class"
myBody.append(p);
let ol = document.createElement("ol");
for(let i=1; i<= 3; i++){
let li = document.createElement("li");
li.textContent ="April showers brings May flowers" +i;
ol.append(li);
}
myBody.append(ol);