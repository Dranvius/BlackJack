"use strict";

let indecesCart = 0;

//Función para construir una baraja

function Carta(tipo, valor, img) {
  //Plantilla de objetos

  this.tipo = tipo;
  this.valor = valor;
  this.img = img;
}

function cleanBoard() {

  let etiqueta = document.getElementById("bot-Baraja");
  let especificoInterno = document.getElementById("cart");
  let borrados = etiqueta.removeChild(especificoInterno);

  return borrados;
}

function boton(){

  Swal.fire({
    template: '#my-template'
  })

}


function asOption(ente) {

  if (ente == 'player') {

    Swal.fire({
      template: '#my-template'
    })
    
  }else{




  }
}

function sumArray(arr, ente) {

  let sum = 0;


  for (let i = 0; i < arr.length; i++) {

    if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {

      sum += 10;

    } else if (arr[i].valor == 1) {

      if (ente == 'player' ) {   //Ejecutar un mensaje que permita escoger a usuario una opcion para el As



      } else {


        //PLAYER  

      }

    } else {

      sum += arr[i].valor;

    }

  }


  return sum
}

function darOne(array, index, persona, borrados = null) {

  indecesCart += 1;

  let clon = borrados.cloneNode(true);

  let place = (persona == "player") ? document.getElementById("jugador-Baraja") : document.getElementById("cartas-bot-Baraja");

  clon.className = persona;

  place.appendChild(clon);
  document.getElementById("Carta-front").id = document.getElementById("Carta-front").id;
  document.getElementById("jugador").style.justifyContent = "space-between";
  document.getElementById("Carta-front").id = document.getElementById("Carta-front").id + indecesCart;
  document.getElementById("Carta-front" + indecesCart).src = "img" + array[index].img + ".png";



}

function reset() {
  location.reload();
}

function mazo() {
  //Falta cuadrar link en cada if bien

  let mazoR = []; //Array de mazo
  let type = "/diamont";

  for (let i = 0; i < 4; i++) {
    //4 repeticiones

    for (let j = 1; j <= 13; j++) {
      if (type == "/picaishont") {
        if (j == 1 || j == 11 || j == 12 || j == 13) {
          mazoR.push(new Carta("Pica", j, "/picaishont" + j));
          continue;
        }

        mazoR.push(new Carta("Pica", j, "/picaishont" + j));
      } else if (type == "/diamont") {
        if (j == 1 || j == 11 || j == 12 || j == 13) {
          mazoR.push(new Carta("diamante", j, "/diamont" + j));
          continue;
        }

        mazoR.push(new Carta("diamante", j, "/diamont" + j));
      } else if (type == "/heart") {
        if (j == 1 || j == 11 || j == 12 || j == 13) {
          mazoR.push(new Carta("corazon", j, "/heart" + j));
          continue;
        }

        mazoR.push(new Carta("corazon", j, "/heart" + j));
      } else if (type == "/flower") {
        if (j == 1 || j == 11 || j == 12 || j == 13) {
          mazoR.push(new Carta("trebol", j, "/flower" + j));
          continue;
        }

        mazoR.push(new Carta("trebol", j, "/flower" + j));
      }
    }

    console.log(type);

    if (i == 0) {
      type = "/picaishont";
    } else if (i == 1) {
      type = "/heart";
    } else if (i == 2) {
      type = "/flower";
    }
  }

  return mazoR;
}

//!Funciones para barrajear la baraja

//! ###### 1 ######### Función de barajeo
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

//Funcion para poner cartas en el tablero

//fisherYatesShuffle(mazoVirgen)

//! ###### 2 ######### _.shuffle

//mazoVirgen = _.shuffle(mazoVirgen);

//!Funcion para dar una carta al incio del juego

function darInicio(array, playerOne, playerTwo) {
  for (let i = 0; i < 4; i++) {
    if (i == 0 || i == 1) {
      playerOne.push(array.shift());
    } else if (i == 2 || i == 3) {
      playerTwo.push(array.shift());
    }
  }
}

//!Funcion para iniciar el juego
function new_game() {
  //!Crear baraja
  let mazoVirgen = mazo();
  //!Realizar dos barajeos sobre la baraja con funciones diferentes
  //!First One
  fisherYatesShuffle(mazoVirgen);
  //!Second One
  mazoVirgen = _.shuffle(mazoVirgen);
  //!Generar carta Sobre Maso para repartir

  //Seleccionar lugar donde debe ir la carta
  const place1 = document.getElementById("cartasEnemy");
  const place2 = document.getElementById("jugador-Baraja");

  //Eliminar Botón de comenzar y establecer los botones que corresponden al juego
  let etiqueta = document.getElementById("jugador");
  let especificoInterno = document.getElementById("start");
  let borradosBTN = etiqueta.removeChild(especificoInterno); //!Posible Refactor de desarrollos

  //Determinar jugador (Array) //Dos cartas iniciales

  let bot = [];
  let player = [];

  //Construir el lugar de las cartas de los dos jugadores.

  //!Jugador
  let jugadorPlace = document.getElementById("jugador");
  let elementoPlayer = document.createElement("div");
  elementoPlayer.id = "jugador-Baraja";

  jugadorPlace.appendChild(elementoPlayer);

  //!Bot

  let botPlace = document.getElementById("bot-Baraja");
  let elementoBot = document.createElement("div");
  elementoBot.id = "cartas-bot-Baraja";

  botPlace.appendChild(elementoBot);

  //Determinar Botones en el espacio donde se elimino el boton xD

  let div = document.createElement("div");

  div.id = "Botones-Play";
  div.style = "display=flex";

  //Ingresar dentro del div jugador

  etiqueta.appendChild(div);

  //Creación de botones
  let a = document.createElement("a");
  let b = document.createElement("a");
  let c = document.createElement("a");

  //?Etiqueta a - 3 botones
  a.className = "btn-neon";
  b.className = "btn-neon";
  c.className = "btn-neon";

  //?Texto de la etiqueta

  a.innerText = "Pedir";
  b.innerText = "Quedarse";
  c.innerText = "OMG";

  c.addEventListener("click", (_) => {
    location.reload();
  }); //!Hello

  //Ingresar botones dentro de la etiqueta

  div.appendChild(a);
  div.appendChild(b);
  div.appendChild(c);

  //Span dentro de la etiqueta
  let s_1 = document.createElement("span");
  let s_2 = document.createElement("span");
  let s_3 = document.createElement("span");
  let s_4 = document.createElement("span");
  let s_5 = document.createElement("span");
  let s_6 = document.createElement("span");

  s_1.id = "span1";                   //!Posible Reducción por el Clon borrado de BTN
  s_3.id = "span3";

  s_2.id = "span1";
  s_4.id = "span3";

  s_5.id = "span1";
  s_6.id = "span3";

  //Ingresa span dentro de los botones

  a.appendChild(s_1);
  a.appendChild(s_3);

  b.appendChild(s_2);
  b.appendChild(s_4);

  c.appendChild(s_5);
  c.appendChild(s_6);

  //Dar carta a los dos jugadores

  console.log(mazoVirgen);

  darInicio(mazoVirgen, bot, player);

  //Crear instancia de etiqueta por medio del DOM de las cartas

  //Tener una plantilla de carta limpiar tablero

  let borrados = cleanBoard(); //!No puede ser reducido;

  //!Colocar cartas en el tablero dependiendo de las cartas almacenadas en el array

  //?Buscar como reducir la logica de ejecución 

  setTimeout(() => {
    darOne(bot, 0, "bot", borrados);
  }, 500)

  setTimeout(() => {
    darOne(bot, 1, "bot", borrados);
  }, 1500)

  setTimeout(() => {
    darOne(player, 0, "player", borrados);
  }, 2000)

  setTimeout(() => {
    darOne(player, 1, "player", borrados);
  }, 3500)

  //Realizar Suma por sus valores determinados


  //Extraer cartas del mazo
}



