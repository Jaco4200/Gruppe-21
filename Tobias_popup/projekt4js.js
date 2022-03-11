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

let onlineellerfysisk = "fysisk";

if (onlineellerfysisk == "online") {
  document.getElementById("linktilzoom").innerHTML = "Link til undervisning: https://zoom.us/";
}

else {
    document.getElementById("linktilzoom").style.display = "none";
}

//<if (this.getField("Vendor_name").value == "Other" || this.getField("Vendor_name").value == "FICA"){      //replace "dropdown" with the name of the dropfield
//event.target.display = display.visible;
//}
//else{
//event.target.display = display.hidden;
//}




//let forberedelseselementer = ["https://kl7.dk/moed-aben-og-jakkesaettet/", "https://www.interaction-design.org/literature/article/the-building-blocks-of-visual-design"];

//function printlinks() {
  //let p = document.getElementById('teksttilliste');

  //for (i = 0; i < forberedelseselementer.length; i++)
   //p.innerHTML += forberedelseselementer[i] + ", ";
//}
//let forberedelseselementer = [document.getElementById("listeelement1"), document.getElementById("listeelement2"), document.getElementById("listeelement3")];

//function udskrivListe()

//function hideforberedelsesbox() {
//if (document.getElementById("overlay").style.display == "none") {
//document.getElementById("forberedelsespopup").style.display = "none";
//}
//}
