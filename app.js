// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = new Array ()

function ingresar(){
    if (document.getElementById('amigo').value.length != 0 ) {
        amigos.push(document.getElementById('amigo').value)
        var ul = document.getElementById("listaAmigos");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(document.getElementById('amigo').value));
        ul.appendChild(li);
        document.getElementById('amigo').value=""
             } else {
        alert("Nombre no valido");
      }
 return
}

function sortearAmigo() {
 document.getElementById("listaAmigos").innerHTML=""
 document.getElementById("resultado").innerHTML=amigos[Math.floor(Math.random() * (amigos.length))]
}

