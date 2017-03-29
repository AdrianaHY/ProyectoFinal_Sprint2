var nuevoBoton=document.createElement("button");
var nombreLista=document.getElementById("nombreLista").value;
var listasCreadas=document.getElementById("listasCreadas");
var nuevaLista=document.createElement("ul");
var pendienteNuevo=document.getElementsByTagName("input").value;
var inputPendiente = pendienteNuevo;

console.log(pendienteNuevo);

function mostrarLista(){
  var nombreLista=document.getElementById("nombreLista").value;
  var listasCreadas=document.getElementById("listasCreadas");
  var nuevaLista=document.createElement("ul");
  var pendienteUno=document.createElement("li");
  //pendienteUno=inputPendiente;

  nuevaLista.value=nombreLista;
  nuevaLista.id="nueva";
  nuevaLista.appendChild(pendienteUno);
  listasCreadas.appendChild(nuevaLista);

  listasCreadas.innerText=nombreLista;

  agregarInput();
  botonLista();

  console.log(nombreLista);

}

function botonLista(){
  var boton = document.createElement("button");
  var nombreBoton = document.createTextNode("Crear pendiente");
  boton.appendChild(nombreBoton);
  document.body.appendChild(boton);
  //agregarPendiente();
  //nuevaLista.appendChild(boton);

}
//Me quedé atorada para obtener los valores del input
//Pensé que con un objeto lista sería bueno
// function Lista(pendiente,nombre){
//   this.nombre = document.getElementById("nombreLista").value;
//   this.agregarPendiente = function(){
//                           var inputPendiente = document.createElement("input");
//                           inputPendiente.value="";
//                           document.body.appendChild(inputPendiente);
//                           console.log(inputPendiente)
//                           }
//   this.crearPendiente = function(){
//                         var boton = document.createElement("button");
//                         var nombreBoton = document.createTextNode("Crear pendiente");
//                         boton.appendChild(nombreBoton);
//                         document.body.appendChild(boton);
//                         agregarPendiente();
//                         }
//   this.pendiente = pendiente;
//
// }
//
//
// var listas=[];
// function crearLista(){
//
//     var unaLista = new Lista(nombre.value,
//                               agregarPendiente(),
//                               crearPendiente());
//     listas.push(unaLista);
//     // mostrarLista();
//
//
//   }
//
//
//   function mostrarLista(){
//
//     var listaFinal=document.createElement("ul");
//     var listasCreadas=document.createTextNode(nombreLista.value);
//     listaFinal.appendChild(listasCreadas);
//     var listasMuchas=document.getElementById("listasCreadas").appendChild(listaFinal);
// }
function agregarInput(){
  var inputPendiente = document.createElement("input");
  // var nombreInput = document.createElement("Tarea pendiente");
  // inputPendiente.appendChild(nombreInput);
  inputPendiente.value="";
  //inputPendiente.id=Date.Now();
  document.body.appendChild(inputPendiente);
  console.log(inputPendiente);

}
