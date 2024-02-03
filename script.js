let uno = document.getElementById("uno"),
dos = document.getElementById("dos"),

h1Element = document.getElementById("resultado"),
tres = document.getElementById("opcionsi1"),
cuatro= document.getElementById("opcionno1"),
cinco=document.getElementById("seleccion"),
pro1=document.getElementById("producto1"),
pro2=document.getElementById("producto2"),
pro3=document.getElementById("producto3"),
pro4=document.getElementById("producto4");
  function mostrardos(){
    let nombreInput = document.getElementById("nombre").value;
    if (nombreInput.trim() !== "") {
        h1Element.innerHTML = "Hola " + nombreInput;
        uno.style.display = "none";
        dos.style.display = "flex";
      } else {

        alert("Por favor, ingrese un nombre en el campo.");
    
      }



    
}


function opcionsi1(){
    dos.style.display="none"
      tres.style.display="flex"
}

function opcionno1(){
    dos.style.display="none"
    cuatro.style.display="flex"
}

function siguiente1(){
    tres.style.display="none"
    cuatro.style.display="none"
    cinco.style.display="flex"
}

function producto1(){
    cinco.style.display="none"
    pro1.style.display="flex"
}

function producto2(){
    cinco.style.display="none"
    pro2.style.display="flex"
}

function producto3(){
    cinco.style.display="none"
    pro3.style.display="flex"
}

function producto4(){
    cinco.style.display="none"
    pro4.style.display="flex"
}