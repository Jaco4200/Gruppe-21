console.log("js is running :)");

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay", "forberedelsespopup", "ekstramaterialepopup").style.display = "none";
}

function on2() {
  document.getElementById("forberedelsespopup").style.display = "inline-block";
}

function off2() {
  document.getElementById("forberedelsespopup").style.display = "none";
}

function on3() {
  document.getElementById("ekstramaterialepopup").style.display = "inline-block";
}

function off3() {
  document.getElementById("ekstramaterialepopup").style.display = "none";
}

let numbers = ["https://www.interaction-design.org/literature/article/the-building-blocks-of-visual-design", "https://kl7.dk/moed-aben-og-jakkesaettet/", "https://christianstaal.com/category/psykologi-2/system-1-og-2", "https://christianstaal.com/category/psykologi-2/system-1-og-2"];

let linkelement = "";

numbers.forEach(myFunction);
document.getElementById("listeoverforberedelsesmateriale").innerHTML = linkelement;

function myFunction(næsteelement) {
  linkelement += næsteelement + "<br>" + "<br>";
}

let onlineellerfysisk = "online";

if (onlineellerfysisk == "online") {
  document.getElementById("linktilzoom").innerHTML = "Link til undervisning: https://zoom.us/";
} else {
  document.getElementById("linktilzoom").style.display = "none";
}
