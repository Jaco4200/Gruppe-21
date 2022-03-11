let Dag = document.querySelector('#btnHtml');
let Uge = document.querySelector('#btnHtml1');
let Måned = document.querySelector('#btnHtml2');
let content = document.querySelector('#content');
let paragraph = document.querySelector('p');

Dag.addEventListener('click', () => {
    content.innerHTML = '<h1>Dag</h1>';
});
Uge.addEventListener('click', () => {
    content.innerHTML = '<h1>Uge</h1>';
});
Måned.addEventListener('click', () => {
    content.innerHTML = '<h1>Måned</h1>';
});
