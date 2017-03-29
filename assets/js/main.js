function mostrarLista(){
  var nombreLista=document.getElementById("nombreLista").value;
  var listasCreadas=document.getElementById("listasCreadas");
  var nuevaLista=document.createElement("ul");
  nuevaLista.value=nombreLista;
  listasCreadas.appendChild(nuevaLista);
  listasCreadas.innerText=nombreLista;

  console.log(nombreLista);

}
function agregar

// var nuevoItem=document.createElement("li");
// nuevaLista.appendChild(nuevoItem);
