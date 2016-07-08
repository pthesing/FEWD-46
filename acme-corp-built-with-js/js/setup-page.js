var body = document.querySelector("body");

var header = document.createElement("header");
body.appendChild(header);

var a = document.createElement("a");
a.setAttribute("href", "index.html");

var img = document.createElement("img");
img.setAttribute("src", "images/acme-corp.jpg");
body.appendChild(header);
header.appendChild(a);
a.appendChild(img);
