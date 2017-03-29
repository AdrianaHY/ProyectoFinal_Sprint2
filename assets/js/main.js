var nuevoBoton=document.createElement("button");
var nombreLista=document.getElementById("nombreLista").value;
var listasCreadas=document.getElementById("listasCreadas");
var nuevaLista=document.createElement("ul");

function mostrarLista(){
  var nombreLista=document.getElementById("nombreLista").value;
  var listasCreadas=document.getElementById("listasCreadas");
  var nuevaLista=document.createElement("ul");

  nuevaLista.value=nombreLista;
  nuevaLista.appendChild(nuevoBoton);
  listasCreadas.appendChild(nuevaLista);
  listasCreadas.innerText=nombreLista;
  botonLista();

  console.log(nombreLista);

}

function botonLista(){
  var boton = document.createElement("button");
  var nombreBoton = document.createTextNode("Agregar pendiente");
  boton.appendChild(nombreBoton);
  document.body.appendChild(boton);
  //nuevaLista.appendChild(boton);

}
// function agregar

// var nuevoItem=document.createElement("li");
// nuevaLista.appendChild(nuevoItem);
