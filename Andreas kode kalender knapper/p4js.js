let Dag = document.querySelector('#btnHtml');
let Uge = document.querySelector('#btnHtml1');
let Måned = document.querySelector('#btnHtml2');
let content = document.querySelector('#content');

Dag.addEventListener('click', () => {
    content.innerHTML = '<h1>Dag</h1>';
});
Uge.addEventListener('click', () => {
    content.innerHTML = '<h1>Uge</h1>';
});
Måned.addEventListener('click', () => {
    content.innerHTML = '<h1>Måned</h1>';
});



var box = document.getElementById('box');

document.getElementById('buttons').addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.id === 'dag') {
    box.style.backgroundColor = 'red';
  } else if (target.id === 'uge') {
    box.style.backgroundColor = 'green';
  } else if (target.id === 'måned') {
    box.style.backgroundColor = 'purple';
  } else {
    box.style.backgroundcolor ='black';
  }
},);

var skema = ["Dagskema", "Ugeskema", "Månedskema"];

var output=document.getElementById("box2");
if (skema[2]=="Månedskema") {
  output.innerHTML="Dette er skemaet";
}else{
  output.innerHTML="Dette er ikke skemaet";
}

output.innerHTML+="<p>Her er der et Array med et loop:</p>"
skema.sort();
for (var i = 0; i < skema.length; i++) {
  output.innerHTML+= "<br>" + skema[i];
}

skema.reverse();
console.log(skema);
