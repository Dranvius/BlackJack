//Construir el objeto de tipo MAP
//Funcion para construir baraja
//     function cartas() {
//         let Array = [];

//         for (let i = 1; i <= 13; i++) {
//           if (i == 11 || i == 12 || i == 13 || i == 1) {
//             if (i == 11) {
//               Array.push("J");
//             } else if (i == 12) {
//               Array.push("Q");
//             } else if (i == 13) {
//               Array.push("K");
//             } else if (i == 1){
//               Array.push('A')
//             }
//           } else {
//             Array.push(i);
//           }
//         }

//         return Array;
//       }

// let baraja = new Map(); //Instanciar un objeto de tipo

// baraja.set("corazones", cartas());
// baraja.set("trebol", cartas());
// baraja.set("pica", cartas());
// baraja.set("diamante", cartas());

// console.log(baraja)

// console.log(baraja.get('diamante'));

// for(valor of baraja){

//     console.log(valor);
// }

// console.log(_.shuffle(baraja.get('corazones')));

// baraja.forEach((valor,clave)=> {
//     console.log(`la clave es :${clave} y el valor asociado es `);

//     //Valor ramdom para escoger al key en el diccionario

//     console.log(Math.floor(Math.random()))

// })

// console.log(cartas());

/*
!Area de test
*/

// let mazoTest = mazo();

// let testEnte = [];
// console.log(mazoTest);

// testEnte.push(mazoTest[0])
// testEnte.push(mazoTest[13]);

// console.log(testEnte);

// async function test(arr, ente) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     //*Recorrido de las cartas por medio del array dado

//     if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
//       //!Si el valor de la carta es 11 12 13 (k,q,j) sume diez

//       sum += 10;
//     } else if (arr[i].valor == 1) {
//       //!Valor igual a uno es un AS

//       if (ente == "player") {

//         console.time("Tiempo" + i);

//         const propiedades = {
//           title: "Usted tiene un AS",
//           icon: "question",
//           text: "¿ Qué valor deseas tomar?",
//           confirmButtonText: "Gamblind",
//           footer: "<center>Consejo del día<br><br>NO MIRES ATRAS</center>",
//           allowOutsideClick: false, //!Propiedad que permite que la ventana
//           allowEscapeKey: false, //!No permite que otros eventos por tecla funcione
//           allowEnterKey: true, //!Bloque la función de ENTER en el popUp
//           stopKeydownPropagation: false,
//           customClass: {
//             title: "titulo-pop",
//             text: "text-pop",
//           },
//           width: "20%",
//           confirmButtonColor: "red",
//           input: "radio",
//           inputOptions: new Promise((resolve) => {
//             setTimeout(() => {
//               resolve({
//                 1: "1",
//                 11: "11",
//               });
//             }, 1000);
//           }),
//           inputValidator: (value) => {
//             if (!value) {
//               return "Necesitas seleccionar algo primero!";
//             }
//           },
//         };

//         let { value: valor } = await swal.fire(propiedades);

//         console.log(valor);

//         sum += parseInt(valor);

//         console.timeEnd("Tiempo" + i);

//       } else {

//         //*Comportamiento para bot
//         sum += botLogic(sum);
//       }
//     } else {
//       sum += arr[i].valor;
//     }
//   }

//   if (sum == 21) {
//     console.log("!  Fin del juego   !El ganador es : " + ente);
//   }

//   console.log(sum)
// }

//LISTO  PASE A LA FUNCIÓN QUE LE DEVUELVA UN NUMERO POR OPERACIÓN

// async function popUp(propiedades) {
//   let { value: valor } = await swal.fire(propiedades).then(function (valor){
//     return valor;
//   });
// }

// test(testEnte,'player');

/* inputOptions can be an object or Promise */
// async function demm(){

//   const inputOptions = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         '#ff0000': 'Red',
//         '#00ff00': 'Green',
//         '#0000ff': 'Blue'
//       })
//     }, 1000)
//   })

//   const { value: color } = await Swal.fire({
//     title: 'Select color',
//     input: 'radio',
//     inputOptions: inputOptions,
//     inputValidator: (value) => {
//       if (!value) {
//         return 'You need to choose something!'
//       }
//     }
//   })

//   if (color) {
//     Swal.fire({ html: `You selected: ${color}` })
//   }

// }

// demm();

// console.log(popUp(testEnte).then(function (value){
//   console.log(value);

// }));

//!Codigo ejemplo

// async function sumArray(arr, ente, sumAnterior = null) {
//   console.log(
//     "repeticion !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
//   );
//   let sum = 0;

//   const propiedades = {
//     title: "Usted tiene un AS",
//     icon: "question",
//     text: "¿ Qué valor deseas tomar?",
//     confirmButtonText: "Gamblind",
//     footer: "<center>Consejo del día<br><br>NO MIRES ATRAS</center>",
//     allowOutsideClick: false, //!Propiedad que permite que la ventana
//     allowEscapeKey: false, //!No permite que otros eventos por tecla funcione
//     allowEnterKey: true, //!Bloque la función de ENTER en el popUp
//     stopKeydownPropagation: false,
//     customClass: {
//       title: "titulo-pop",
//       text: "text-pop",
//     },
//     width: "20%",
//     confirmButtonColor: "red",
//     input: "radio",
//     inputOptions: new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           1: "1",
//           11: "11",
//         });
//       }, 1000);
//     }),
//     inputValidator: (value) => {
//       if (!value) {
//         return "Necesitas seleccionar algo primero!";
//       }
//     },
//   };

//   //!Primera entrada
//   if (sumAnterior == null) {
//     console.log("Soy la primera suma");

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
//         sum += 10;
//       } else if (arr[i].valor == 1) {
//         if (ente == "player") {
//           console.time("Tiempo" + i);

//           let { value: valor } = await swal.fire(propiedades);

//           sum += parseInt(valor);

//           console.timeEnd("Tiempo" + i);
//         } else {
//           sum += botLogic(sum);
//         }
//       } else {
//         sum += arr[i].valor;
//       }
//     }

//     //Pensar en retornar algo
//   } else {

//     //!Uno por uno
//     console.log("Soy la segunda iteración de la función ");
//     console.log(sumAnterior);
//     //!Segunda entrada

//     // sumAnterior.then((valorExtraido) => {
//     //   //?Pasa el valor como suma (Pero creo que solo se puede usar para valor de petición)
//     //   sum = valorExtraido;
//     //   console.log("Dentro del then " + sum);
//     // });

//     // // console.log("VALOR ANTERIOR " +sum);

//     // //!Entrada cuando ya tenemos un valor de suma

//     if (arr[arr.length - 1].valor == 1) {

//       let { value: valor } = await swal.fire(propiedades);
//         console.log("Valor dado por usuario : " +valor);

//         sumGlobal += parseInt(valor);
//         sum = sumGlobal ; //!Contexto de devolución

//         console.log("VALOR DE LOS AS : " +sum);
//         console.log("variable global" +sumGlobal);
//       return sum; //!Posible error (Depronto me devulve una promesa)

//       // console.log(sumAnterior); //!No reconoce la captura del dato
//       // let { value: valor } = await swal.fire(propiedades); //!Capturamos el valor de la promesa

//       // //!P  A   T   R   O   N      EXTRAÑO
//       // console.log("SUPER EXTRAÑO");
//       // //?Si quito la función de la linea 375 deja de funcionar pero debe tener una relación con  el await valor de la linea 387
//       // console.log(sum); //!Reconoce suma despues del await con valor
//       // sum += parseInt(valor);

//       // return sum;

//       // sumAnterior 


//     } else if (
//       arr[arr.length - 1].valor == 11 ||
//       arr[arr.length - 1].valor == 12 ||
//       arr[arr.length - 1].valor == 13
//     ) {
//       console.log("Soy el valor que esta adentro de los K Q J" + sum);

//       sumGlobal += 10;
//       sum = sumGlobal;

//       console.log("VALOR DE LOS AS : " +sum);
//       console.log("variable global" +sumGlobal);
//        //!Posible error (Depronto me devulve una promesa)
      

//       // sumAnterior.then((valorAnterior) => {
//       //   sum = valorAnterior + 10;
//       //   console.log(sum);
//       //   return sum;
//       // });

//       // sumAnterior.then((valorAlmacenado) => {
//       //   console.log(valorAlmacenado);
//       // });
//       // let promesaTest = sumAnterior.then((valorFinal) => {
//       //   return valorFinal;
//       // });

//       // console.log(promesaTest);

//       // sum += 10;
//     } else {
//       console.log("De los valores normales 1,2,3,4,..." + sum);
//       console.log("hola soy sum global"+sumGlobal)
//       sumGlobal += arr[arr.length - 1].valor

//       sum = sumGlobal;
//       console.log(arr);
//       console.log("VALOR DE LOS AS : " +sum);
//       console.log("variable global" +sumGlobal);
    



//       // sumAnterior.then((valorAnterior) => {
//       //   console.log(valorAnterior);
//       //   sum = valorAnterior + arr[arr.length - 1].valor;
//       //   console.log(sum);
//       //   return sum;
//       // });
//     }
//   }

//   if (sum == 21) {
//     endGame(ente);
//   } else if (sum > 21){
//     endGame("Bot");
//   }

//   console.log("Valor de retorno :" + sum);
//   sumGlobal = sum;
  
//   return sum;
// }

// function pedir(arr, baraja, ente = 'player', promesaSecuencial) {
//   arr.push(baraja.shift());

//   promesaSecuencial(arr, "player", sumGlobal).then((valor) => { //Suma
//     console.log(sumGlobal);

//   });


//   // if (arr.length == 3) {
//   //   promesaSecuencial(arr, "player", sumGlobal).then((valor) => {
//   //     sumGlobal = valor;      
//   //     console.log(sumGlobal);
//   //   });
//   // } else if (arr.length > 3) {
//   //   console.log(sumGlobal);

//   //   promesaSecuencial(arr, "player", sumGlobal).then((valor) => {
//   //     sumGlobal += valor;
//   //     console.log(sumGlobal);
//   //   });
//   // }
// }

// //Primera ejecución
// let scorePlayer = sumArray(testEnte, "player"); //!Promesa Dos cartas iniciales

// console.log(
//   "++++++++++++++++++++++++---------------------------+++++++++------------------------+++++++++++++++++++"
// );


// console.log(scorePlayer);

// //Segunda ejecución

// document.getElementById("test").addEventListener("click", (_) => {
//   //!Debe cambiar

//   scorePlayer.then((valorSumInicial) => {
//     pedir(testEnte, mazoTest, "player", sumArray);
//   });
// });


//!Testeo función suma y pedir

const endGame = (Ente) => {
  swal.fire({
    title: "El ganador es : " + Ente,
    text: "Buen juego",
    width: "20%",
    confirmButtonColor: "red",
    icon: "warning",
  });

  // setTimeout(() => {location.reload()}, 50000); //*Ojo con el tiempo
};

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

function Carta(tipo, valor, img) {
  //Plantilla de objetos

  this.tipo = tipo;
  this.valor = valor;
  this.img = img;
}

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

/*
!Funciones importantes
*/

//!VARIABLES
let testEnte = [];
let testEnte2 = [];
let mazoTest = mazo();
let sumGlobal = 0;

testEnte.push(mazoTest[0]);
testEnte.push(mazoTest[13]);

testEnte2.push(mazoTest[8]);
testEnte2.push(mazoTest[31])


async function sumArray(arr, ente, sumAnterior = null) {
  console.log(
    "repeticion !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
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

  console.log(arr);


  //!Primera entrada
  if (sumAnterior == null) {
    console.log("Soy la primera suma");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
        sum += 10;
      } else if (arr[i].valor == 1) {
        if (ente == "player") {
          console.time("Tiempo" + i);

          let { value: valor } = await swal.fire(propiedades);

          sum += parseInt(valor);

          console.timeEnd("Tiempo" + i);
        } else {
          sum += botLogic(sum);
        }
      } else {
        sum += arr[i].valor;
      }
    }

    //Pensar en retornar algo
  } else {

    //!Uno por uno
    console.log("Soy la segunda iteración de la función ");
    console.log(sumAnterior);
    
    //!Segunda entrada

    // sumAnterior.then((valorExtraido) => {
    //   //?Pasa el valor como suma (Pero creo que solo se puede usar para valor de petición)
    //   sum = valorExtraido;
    //   console.log("Dentro del then " + sum);
    // });

    // // console.log("VALOR ANTERIOR " +sum);

    // //!Entrada cuando ya tenemos un valor de suma

    if (arr[arr.length - 1].valor == 1) {

      let { value: valor } = await swal.fire(propiedades);
        console.log("Valor dado por usuario : " +valor);

        sumGlobal += parseInt(valor);
        sum = sumGlobal ; //!Contexto de devolución

        console.log("VALOR DE LOS AS : " +sum);
        console.log("variable global" +sumGlobal);
      return sum; //!Posible error (Depronto me devulve una promesa)

      // console.log(sumAnterior); //!No reconoce la captura del dato
      // let { value: valor } = await swal.fire(propiedades); //!Capturamos el valor de la promesa

      // //!P  A   T   R   O   N      EXTRAÑO
      // console.log("SUPER EXTRAÑO");
      // //?Si quito la función de la linea 375 deja de funcionar pero debe tener una relación con  el await valor de la linea 387
      // console.log(sum); //!Reconoce suma despues del await con valor
      // sum += parseInt(valor);

      // return sum;

      // sumAnterior 


    } else if (
      arr[arr.length - 1].valor == 11 ||
      arr[arr.length - 1].valor == 12 ||
      arr[arr.length - 1].valor == 13
    ) {
      console.log("Soy el valor que esta adentro de los K Q J" + sum);

      sumGlobal += 10;
      sum = sumGlobal;

      console.log("VALOR DE LOS AS : " +sum);
      console.log("variable global" +sumGlobal);
       //!Posible error (Depronto me devulve una promesa)
      

      // sumAnterior.then((valorAnterior) => {
      //   sum = valorAnterior + 10;
      //   console.log(sum);
      //   return sum;
      // });

      // sumAnterior.then((valorAlmacenado) => {
      //   console.log(valorAlmacenado);
      // });
      // let promesaTest = sumAnterior.then((valorFinal) => {
      //   return valorFinal;
      // });

      // console.log(promesaTest);

      // sum += 10;
    } else {
      console.log("De los valores normales 1,2,3,4,..." + sum);
      console.log("hola soy sum global"+sumGlobal)
      sumGlobal += arr[arr.length - 1].valor

      sum = sumGlobal;
      console.log(arr);
      console.log("VALOR DE LOS AS : " +sum);
      console.log("variable global" +sumGlobal);
    



      // sumAnterior.then((valorAnterior) => {
      //   console.log(valorAnterior);
      //   sum = valorAnterior + arr[arr.length - 1].valor;
      //   console.log(sum);
      //   return sum;
      // });
    }
  }

  if (sum == 21) {
    endGame(ente);
  } else if (sum > 21){
    endGame("Bot");
  }

  console.log("Valor de retorno :" + sum);
  sumGlobal = sum;


  //!Función para poner
    //?Ponerlo de una
  
  return sum;
}

function pedir(arr, baraja, ente = 'player', promesaSecuencial) {
  arr.push(baraja.shift());

  console.log(arr);

  promesaSecuencial(arr, "player", sumGlobal).then((valor) => { //Suma
    console.log(sumGlobal);

  });


  // if (arr.length == 3) {
  //   promesaSecuencial(arr, "player", sumGlobal).then((valor) => {
  //     sumGlobal = valor;      
  //     console.log(sumGlobal);
  //   });
  // } else if (arr.length > 3) {
  //   console.log(sumGlobal);

  //   promesaSecuencial(arr, "player", sumGlobal).then((valor) => {
  //     sumGlobal += valor;
  //     console.log(sumGlobal);
  //   });
  // }
}

//Primera ejecución
// let scorePlayer = sumArray(testEnte, "player"); //!Promesa Dos cartas iniciales

console.log(
  "++++++++++++++++++++++++---------------------------+++++++++------------------------+++++++++++++++++++"
);


let scorePlayer2 = sumArray(testEnte2, "player");


// console.log(scorePlayer);

//Segunda ejecución

// document.getElementById("test").addEventListener("click", (_) => {
//   //!Debe cambiar

//   scorePlayer.then((valorSumInicial) => {
//     pedir(testEnte, mazoTest, "player", sumArray);
//   });
// });

document.getElementById("test").addEventListener("click", (_) => {
  //!Debe cambiar

  scorePlayer2.then((valorSumInicial) => {
    pedir(testEnte2, mazoTest, "player", sumArray);
  });
});