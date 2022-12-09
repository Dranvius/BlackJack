"use strict";
//!Uso de variable global para establecer uso de cartas
let indecesCart = 0;
let sumGlobal = 0;
let sumGobalBot = 0;

//!Función utilizada como plantilla de cartas para crear varios objetos tipo Carta
function Carta(tipo, valor, img) {
  //Plantilla de objetos

  this.tipo = tipo;
  this.valor = valor;
  this.img = img;
}

function botSum (arr){

  let sum = 0

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
      
      sum += 10;

    } else if (arr[i].valor == 1) {
      
      sum += botLogic(sum);

    } else {
      
      sum += arr[i].valor;

    }
  }

  console.log("Soy la suma del bot" +sum);
return sum;

}

//!Función utilizada para finalizar el juego por mensaje
const endGame = (Ente) => {
  swal.fire({
    title: "El ganador es : " + Ente,
    text: "Buen juego",
    width: "20%",
    showConfirmButton: true,
    icon: "warning",
  });

  setTimeout(() => {reset()}, 30000); //*Ojo con el tiempo
};



function ganador(resultadoBot,resultadoPlayer){

  resultadoBot = 21 - resultadoBot;
  resultadoPlayer = 21 -resultadoPlayer; 

  if(resultadoBot > resultadoPlayer && resultadoBot < 21){
   
    endGame("BOT");

  }else if( resultadoBot == resultadoPlayer){

    document.write("Nadie gano y todos se murieron");

  }else if (resultadoBot < resultadoPlayer && resultadoPlayer < 21){

    endGame("player");

  }



}





function totalBot(sumatoriaInicial,parametroSalida){ 

  if(sumatoriaInicial < 15 && parametroSalida == 0){

      pedir(arr,baraja,"bot",cartaExample,valor).then(valorSuma =>{

        parametroSalida = (valorSuma < 15) ? 0 : 1;
    
        totalBot(valorSuma,parametroSalida);

      })



  }else{




    return totalBot
  }



}

const quedar = function (arrBot,cartaExample,baraja){

  let nodoPadre = document.getElementById("cartas-bot-Baraja");


  let clon = cartaExample.cloneNode(true);
    let img = arrBot[0].img;
    console.log(img);
    clon.id = "cart";
    clon.className = "cartaRevelada"
    

  nodoPadre.replaceChild(clon,document.getElementsByClassName("bot1")[0])
  document.querySelector(".cartaRevelada #Carta-front").id = "Carta-front1"
  document.querySelector("#Carta-front1").src = "img/"+ img + ".png";

  let primer = sumArray(arrBot,"Bot") 


  primer.then(valor =>{
            

    let cambioPromesa = valor
      let comprobante = 0;

    while(cambioPromesa < 20){
      console.log("Cambio de variable exogena " +cambioPromesa);
      comprobante += 1;
      console.log(comprobante);


      cambioPromesa = pedir(arrBot,baraja,"bot",cartaExample,sumArray);

      // 
    }

    ponerSumEnTablero(cambioPromesa,"Bot")

    ganador(cambioPromesa,sumGlobal);




  })

}

//!Función utilizada para limpiar el talero al inicio del juego
//?Devuelve la el NODO borrado
function cleanBoard() {
  let etiqueta = document.getElementById("bot-Baraja");
  let especificoInterno = document.getElementById("cart");
  let borrados = etiqueta.removeChild(especificoInterno);

  return borrados;
}
//!Función utilizada para establecer la logica del BOT
function botLogic(sumP) {
  //*El Valor sumP es la suma que tiene en ese momento la operación

  if (sumP < 11) {
    console.log("Salida para el bot cuando tiene un valor menor que 11");

    return 11;
  } else {
    console.log("Salida cuando el bot tiene unv alor mayor o igual a 1");

    return 1;
  }
}
//!Función utilizada para dar dos tarjeta a los jugadores al inicio del juego
function darOne(array, index, persona, borrados = null) {
  indecesCart += 1; //!Variable global para conocer el indice global de cartas en el juego

  let clon = borrados.cloneNode(true);

  let place =
    persona == "player"
      ? document.getElementById("jugador-Baraja")
      : document.getElementById("cartas-bot-Baraja");

  clon.className = persona;

  place.appendChild(clon);
  document.getElementById("Carta-front").id =
    document.getElementById("Carta-front").id;
  document.getElementById("jugador").style.justifyContent = "space-between";
  document.getElementById("Carta-front").id =
    document.getElementById("Carta-front").id + indecesCart;
  document.getElementById("Carta-front" + indecesCart).src =
    "img" + array[index].img + ".png";

  if (indecesCart == 1) {
    clon.className = persona + indecesCart;
    document.getElementById("Carta-front" + indecesCart).src =
      "img/Card_Model.png";
  }
}
//!Función que resetea el juego
//*No es muy necesaria
function reset() {
  location.reload();
}

//!Función programada para el boton borrar
//todo Esta en refactorización


//!Función utilizada para organizar crear mazo incial
function mazo() {
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
//!Funcion para dar una carta al incio del juego por orden y posición
function darInicio(array, playerOne, playerTwo) {
  for (let i = 0; i < 4; i++) {
    if (i == 0 || i == 1) {
      playerOne.push(array.shift());
    } else if (i == 2 || i == 3) {
      playerTwo.push(array.shift());
    }
  }
}

//!Establecer suma en tablero 
function ponerSumEnTablero(sum, ente) {
  //!Hay que acomodar el puntaje para el bot cuando se presione me quedo

  console.log(ente)
  let child = document.createElement("h6");

  if (document.getElementById("hollow") == null && document.getElementById("playerScore") != null && ente == "player" ) {

    //!document.getElementById('playerScore').removeChild(document.getElementById(''));
    document.getElementById("scoreEnd").innerText = "PLAYER : " + sum;

  }else if(document.getElementById("jack") == null && document.getElementById("BotScore") != null && ente == "Bot"){
    console.log("Dentro de Bot")
    document.getElementById("scoreEndBot").innerText = "Bot : " + sum;

   }else{
    console.log("unaVez")
   
  if(document.getElementById("hollow") != null ){
    document.getElementById("playerScore").removeChild(document.getElementById("hollow"));

  }else if(document.getElementById("jack") != null ){
    document.getElementById("BotScore").removeChild(document.getElementById("jack"));

  }

    console.log(ente);
    let place = "";

    if (ente == "player") {
      place = document.getElementById("playerScore");
      child.innerText = "PLAYER : " + sum;
      child.id = "scoreEnd";

      place.appendChild(child);

    } else {
      console.log("Primera entrada en tablero BOT")
      place = document.getElementById("BotScore"); //!Establecer Logica para bot******************************
      child.innerText = "Bot : " + sum;
      child.id = "scoreEndBot";

      place.appendChild(child);
    }
  }
}

//!Establecer suma de array en el tablero
  //!Establecer un refactorizador
async function sumArray(arr, ente, sumAnterior = null) {

  if(ente == "player"){

    let sum = 0;

  const propiedades = {
    title: "Usted tiene un AS",
    icon: "question",
    text: "¿ Qué valor deseas tomar?",
    confirmButtonText: "Gamblind",
    footer: "<center>Consejo del día<br><br>NO MIRES ATRAS</center>",
    allowOutsideClick: false, //!Propiedad que permite que la ventana
    allowEscapeKey: false, //!No permite que otros eventos por tecla funcione
    allowEnterKey: true, //!Bloque la función de ENTER en el popUp
    stopKeydownPropagation: false,
    customClass: {
      title: "titulo-pop",
      text: "text-pop",
    },
    width: "20%",
    confirmButtonColor: "red",
    input: "radio",
    inputOptions: new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          1: "1",
          11: "11",
        });
      }, 1000);
    }),
    inputValidator: (value) => {
      if (!value) {
        return "Necesitas seleccionar algo primero!";
      }
    },
  };

  if (sumAnterior == null) {
    console.log("Soy la primera suma");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
        sum += 10;
      } else if (arr[i].valor == 1) {
        if (ente == "player") {
          
          let { value: valor } = await swal.fire(propiedades);

          sum += parseInt(valor);

          
        } else {
          sum += botLogic(sum);
        }
      } else {
        sum += arr[i].valor;
      }
    }

    //Pensar en retornar algo

   

  } else {


    if (arr[arr.length - 1].valor == 1) {

      let { value: valor } = await swal.fire(propiedades);


        sumGlobal += parseInt(valor);
        sum = sumGlobal ; 


      // return sum; //!POSIBLE ERROR A

    } else if (
      arr[arr.length - 1].valor == 11 ||
      arr[arr.length - 1].valor == 12 ||
      arr[arr.length - 1].valor == 13
    ) {


      sumGlobal += 10;
      sum = sumGlobal;


      
    } else {

      sumGlobal += arr[arr.length - 1].valor

      sum = sumGlobal;

    


    }
  }

  if (sum == 21) {
    endGame(ente);
  } else if (sum > 21){
    let ganadorFinal = (ente == "player") ? "bot" : "player"
    console.log("Gnador en sumArray "+ganadorFinal);
    endGame(ganadorFinal);
  }

  console.log("Valor de retorno :" + sum);
  sumGlobal = sum;

  return sum;


  }else{
    let sum = 0

    for (let i = 0; i < arr.length; i++) {

      if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
        
        sum += 10;

      } else if (arr[i].valor == 1) {
        
        sum += botLogic(sum);

      } else {
        
        sum += arr[i].valor;

      }
    }

    console.log("Soy la suma del bot" +sum);
  return sum;
  }

  
}



function pedir(arr, baraja, ente = 'player',cartaExample, promesaSecuencial) {

  arr.push(baraja.shift()); 

  let clon = cartaExample.cloneNode(true); 

  indecesCart += 1;

  let place = ente == "player" ? document.getElementById("jugador-Baraja") : document.getElementById("cartas-bot-Baraja");

  if( ente == "player" ){

    clon.className = ente;
    place.appendChild(clon);
    
    document.getElementById("jugador").style.justifyContent = "space-between";
    document.getElementById("Carta-front").id = document.getElementById("Carta-front").id + indecesCart;
    document.getElementById("Carta-front" + indecesCart).src = "img" + arr[arr.length - 1].img + ".png";
  
    promesaSecuencial(arr, "player", sumGlobal).then((valor) => {
      sumGlobal = valor;      
      console.log(sumGlobal);
      ponerSumEnTablero(sumGlobal, ente);
    });

  }else{
    //!Bot
    clon.className = ente;
    
    place.appendChild(clon);
    document.getElementById("Carta-front").id = document.getElementById("Carta-front").id + indecesCart;
    document.getElementById("Carta-front" + indecesCart).src = "img" + arr[arr.length - 1].img + ".png";
  
    ponerSumEnTablero(botSum(arr),"Bot")

    return botSum(arr);
   


  }

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
  //*fisherYatesShuffle(mazoVirgen)

//! ###### 2 ######### _.shuffle

  //mazoVirgen = _.shuffle(mazoVirgen);

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

  //Tener una plantilla de carta limpiar tablero

  let borrados = cleanBoard(); //!No puede ser reducido;

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
  let c = document.createElement("a");      //!Simplificar con removeNode

  //?Etiqueta a - 3 botones
  a.className = "btn-neon";
  b.className = "btn-neon";
  c.className = "btn-neon";

  //?Texto de la etiqueta

  a.innerText = "Pedir";
  b.innerText = "Quedarse";     //Modificar por medio de un NODE
  c.innerText = "OMG";

  c.addEventListener("click", (_) => {
    location.reload();
  });

  b.addEventListener("click", (_) => {
    quedar(bot,borrados,mazoVirgen ); //*Falta
  });

  //Ingresar botones dentro de la etiqueta

  div.appendChild(a);
  div.appendChild(b);
  div.appendChild(c);

  //Span dentro de la etiqueta
  let s_1 = document.createElement("span");
  let s_2 = document.createElement("span");
  let s_3 = document.createElement("span"); //!mODIFICAR POR MEDIO DE REMOVE NODE ALMACENADO
  let s_4 = document.createElement("span");
  let s_5 = document.createElement("span");
  let s_6 = document.createElement("span");

  s_1.id = "span1"; //!Posible Reducción por el Clon borrado de BTN
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
    //*llenar array

  darInicio(mazoVirgen, bot, player);

  //Establecer suma en el tablero
    //!Primedo debe ser playerOne
    //!Despues debe ser bot pero despues de presionar el boton quedarse
  let scorePlayer = sumArray(player, "player");

  scorePlayer.then(
    (valor) => {
      ponerSumEnTablero(valor, "player");
    },
    (error) => console.log(error)
  );

  a.addEventListener("click", (_) => {  
  
    scorePlayer.then((valorSumInicial) => {
      pedir(player, mazoVirgen, "player",borrados,sumArray);
    });

  }); 
  
  //?Buscar como reducir la logica de ejecución
    //!Posible simplificación con un for

  setTimeout(() => {
    darOne(bot, 0, "bot", borrados);
  }, 500);

  setTimeout(() => {
    darOne(bot, 1, "bot", borrados);
  }, 2500);

  setTimeout(() => {
    darOne(player, 0, "player", borrados);
  }, 3500);

  setTimeout(() => {
    darOne(player, 1, "player", borrados);
  }, 5500);

  //Realizar Suma por sus valores determinados
}


