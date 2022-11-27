//Construir el objeto de tipo MAP
    //Funcion para construir baraja
    function cartas() {
        let Array = [];
      
        for (let i = 1; i <= 13; i++) {
          if (i == 11 || i == 12 || i == 13 || i == 1) {
            if (i == 11) {
              Array.push("J");
            } else if (i == 12) {
              Array.push("Q");
            } else if (i == 13) {
              Array.push("K");
            } else if (i == 1){
              Array.push('A')
            }
          } else {
            Array.push(i);
          }
        }
      
        return Array;
      }

let baraja = new Map(); //Instanciar un objeto de tipo


baraja.set("corazones", cartas());
baraja.set("trebol", cartas());
baraja.set("pica", cartas());
baraja.set("diamante", cartas());



console.log(baraja)

console.log(baraja.get('diamante'));


for(valor of baraja){

    console.log(valor);
}

console.log(_.shuffle(baraja.get('corazones')));


baraja.forEach((valor,clave)=> {
    console.log(`la clave es :${clave} y el valor asociado es `);

    //Valor ramdom para escoger al key en el diccionario

    console.log(Math.floor(Math.random()))





})



console.log(cartas());

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
