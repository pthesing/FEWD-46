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

var nav = document.createElement("nav");

body.appendChild(header);
header.appendChild(nav);

var ol = document.createElement("ol");

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ol);

var li1 = document.createElement("li");

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ol);
ol.appendChild(li);

var a1 = document.createElement("a");
a1.setAttribute("href", "products.html");
a1.textContent = "Products";

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ol);
ol.appendChild(li);
li.appendChild(a);

var li2 = document.createElement("li");

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ol);
ol.appendChild(li);
