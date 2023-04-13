var i = 0;

var elemento = document.getElementById('titulo1');
elemento.addEventListener('click', function () {
  //alert("click en titulo");
  elemento.innerHTML = i;
  crearParrafo();
});

var elemento = document.getElementById('titulo1');
elemento.addEventListener('click', function () {
  //alert("click en titulo");
  elemento.innerHTML = i;
  addLink();
});

elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
  //elemento.innerHTML=i
  //elemento.classList.add("new_size")
});


var menu = document.getElementById('menu');
var listas = menu.getElementsByTagName('li');
console.log(listas);

var list = document.querySelector('ul li');
console.log(list);

var list = document.querySelectorAll('#menu li');
console.log(list);

var list2 =document.querySelectorAll("aside li")
console.log(list2)
for(let li of list2){
li.classList.add("desplazar");
}
setTimeout(function(){
  for(let li of list2){
    li.classList.remove("desplazar");
    }
},1000)



var list2 = document.querySelectorAll('#menu li:nth-child(odd)')
console.log(list2)

function crearParrafo(){
var parrafo = document.createElement("p")
var contenido = document.createTextNode("Este es un parrafo desde JavaScrip")
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);}

function addLink(){
  console.log("add link 1")
  var link=document.createElement("li")
  link.innerHTML="<a href='https://google.com'>google</a>"
  var ul=document.querySelector("aside ul")
  ul.appendChild(link)
}
