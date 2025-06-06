import { Carta, mazo, fisherYatesShuffle } from './deck.js';
import { cleanBoard, ponerSumEnTablero, endGame, ganador } from './ui.js';

let indecesCart = 0;
let sumGlobal = 0;
let sumGobalBot = 0; // unused but kept for compatibility
let botSumGlobal = 0;

export function botSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
      sum += 10;
    } else if (arr[i].valor == 1) {
      sum += botLogic(sum);
    } else {
      sum += arr[i].valor;
    }
  }
  console.log('Soy la suma del bot' + sum);
  botSumGlobal = sum;
  return sum;
}

export function totalBot(sumatoriaInicial, parametroSalida) {
  if (sumatoriaInicial < 15 && parametroSalida == 0) {
    pedir(arr, baraja, 'bot', cartaExample, valor).then((valorSuma) => {
      parametroSalida = valorSuma < 15 ? 0 : 1;
      totalBot(valorSuma, parametroSalida);
    });
  } else {
    return totalBot;
  }
}

function computeWinner(botScore, playerScore) {
  if (botScore > 21 && playerScore > 21) {
    return 'tie';
  }
  if (botScore > 21) return 'player';
  if (playerScore > 21) return 'bot';
  const botDist = 21 - botScore;
  const playerDist = 21 - playerScore;
  if (botDist < playerDist) return 'bot';
  if (playerDist < botDist) return 'player';
  return 'tie';
}

export const quedar = function (arrBot, cartaExample, baraja) {
  let nodoPadre = document.getElementById('cartas-bot-Baraja');
  let clon = cartaExample.cloneNode(true);
  let img = arrBot[0].img;
  clon.id = 'cart';
  clon.className = 'cartaRevelada';
  nodoPadre.replaceChild(clon, document.getElementsByClassName('bot1')[0]);
  document.querySelector('.cartaRevelada #Carta-front').id = 'Carta-front1';
  document.querySelector('#Carta-front1').src = 'img/' + img + '.png';

  let primer = sumArray(arrBot, 'Bot');
  primer.then((valor) => {
    botSumGlobal = valor;
    while (window.botAI.decide(botSumGlobal)) {
      botSumGlobal = pedir(arrBot, baraja, 'bot', cartaExample, sumArray);
    }
    ponerSumEnTablero(botSumGlobal, 'Bot');
    const winner = computeWinner(botSumGlobal, sumGlobal);
    ganador(botSumGlobal, sumGlobal);
    window.botAI.logGame(sumGlobal, botSumGlobal, winner);
    window.botAI.exportCSV();
  });
};

export function botLogic(sumP) {
  if (sumP < 11) {
    console.log('Salida para el bot cuando tiene un valor menor que 11');
    return 11;
  } else {
    console.log('Salida cuando el bot tiene un valor mayor o igual a 1');
    return 1;
  }
}

export function darOne(array, index, persona, borrados = null) {
  indecesCart += 1;
  let clon = borrados.cloneNode(true);
  let place =
    persona == 'player'
      ? document.getElementById('jugador-Baraja')
      : document.getElementById('cartas-bot-Baraja');
  clon.className = persona;
  place.appendChild(clon);
  document.getElementById('Carta-front').id = document.getElementById('Carta-front').id;
  document.getElementById('jugador').style.justifyContent = 'space-between';
  document.getElementById('Carta-front').id = document.getElementById('Carta-front').id + indecesCart;
  document.getElementById('Carta-front' + indecesCart).src = 'img' + array[index].img + '.png';
  if (indecesCart == 1) {
    clon.className = persona + indecesCart;
    document.getElementById('Carta-front' + indecesCart).src = 'img/Card_Model.png';
  }
}

export function darInicio(array, playerOne, playerTwo) {
  for (let i = 0; i < 4; i++) {
    if (i == 0 || i == 1) {
      playerOne.push(array.shift());
    } else if (i == 2 || i == 3) {
      playerTwo.push(array.shift());
    }
  }
}

export async function sumArray(arr, ente, sumAnterior = null) {
  if (ente == 'player') {
    let sum = 0;
    const propiedades = {
      title: 'Usted tiene un AS',
      icon: 'question',
      text: '¿ Qué valor deseas tomar?',
      confirmButtonText: 'Gamblind',
      footer: '<center>Consejo del día<br><br>NO MIRES ATRAS</center>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      customClass: {
        title: 'titulo-pop',
        text: 'text-pop',
      },
      width: '20%',
      confirmButtonColor: 'red',
      input: 'radio',
      inputOptions: new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            1: '1',
            11: '11',
          });
        }, 1000);
      }),
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas seleccionar algo primero!';
        }
      },
    };

    if (sumAnterior == null) {
      console.log('Soy la primera suma');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
          sum += 10;
        } else if (arr[i].valor == 1) {
          if (ente == 'player') {
            let { value: valor } = await swal.fire(propiedades);
            sum += parseInt(valor);
          } else {
            sum += botLogic(sum);
          }
        } else {
          sum += arr[i].valor;
        }
      }
    } else {
      if (arr[arr.length - 1].valor == 1) {
        let { value: valor } = await swal.fire(propiedades);
        sumGlobal += parseInt(valor);
        sum = sumGlobal;
      } else if (
        arr[arr.length - 1].valor == 11 ||
        arr[arr.length - 1].valor == 12 ||
        arr[arr.length - 1].valor == 13
      ) {
        sumGlobal += 10;
        sum = sumGlobal;
      } else {
        sumGlobal += arr[arr.length - 1].valor;
        sum = sumGlobal;
      }
    }

    if (sum == 21) {
      sumGlobal = sum;
      endGame(ente);
      window.botAI.logGame(sumGlobal, botSumGlobal, ente);
      window.botAI.exportCSV();
    } else if (sum > 21) {
      let ganadorFinal = ente == 'player' ? 'bot' : 'player';
      console.log('Gnador en sumArray ' + ganadorFinal);
      sumGlobal = sum;
      endGame(ganadorFinal);
      window.botAI.logGame(sumGlobal, botSumGlobal, ganadorFinal);
      window.botAI.exportCSV();
    }
    console.log('Valor de retorno :' + sum);
    sumGlobal = sum;
    return sum;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].valor == 11 || arr[i].valor == 12 || arr[i].valor == 13) {
        sum += 10;
      } else if (arr[i].valor == 1) {
        sum += botLogic(sum);
      } else {
        sum += arr[i].valor;
      }
    }
    console.log('Soy la suma del bot' + sum);
    return sum;
  }
}

export function pedir(arr, baraja, ente = 'player', cartaExample, promesaSecuencial) {
  arr.push(baraja.shift());
  let clon = cartaExample.cloneNode(true);
  indecesCart += 1;
  let place =
    ente == 'player'
      ? document.getElementById('jugador-Baraja')
      : document.getElementById('cartas-bot-Baraja');
  if (ente == 'player') {
    clon.className = ente;
    place.appendChild(clon);
    document.getElementById('jugador').style.justifyContent = 'space-between';
    document.getElementById('Carta-front').id = document.getElementById('Carta-front').id + indecesCart;
    document.getElementById('Carta-front' + indecesCart).src = 'img' + arr[arr.length - 1].img + '.png';
    promesaSecuencial(arr, 'player', sumGlobal).then((valor) => {
      sumGlobal = valor;
      console.log(sumGlobal);
      ponerSumEnTablero(sumGlobal, ente);
    });
  } else {
    clon.className = ente;
    place.appendChild(clon);
    document.getElementById('Carta-front').id = document.getElementById('Carta-front').id + indecesCart;
    document.getElementById('Carta-front' + indecesCart).src = 'img' + arr[arr.length - 1].img + '.png';
    ponerSumEnTablero(botSum(arr), 'Bot');
    botSumGlobal = botSum(arr);
    return botSumGlobal;
  }
}

export function new_game() {
  sumGlobal = 0;
  botSumGlobal = 0;
  let mazoVirgen = mazo();
  fisherYatesShuffle(mazoVirgen);
  mazoVirgen = _.shuffle(mazoVirgen);
  const place1 = document.getElementById('cartasEnemy');
  const place2 = document.getElementById('jugador-Baraja');
  let etiqueta = document.getElementById('jugador');
  let especificoInterno = document.getElementById('start');
  let borradosBTN = etiqueta.removeChild(especificoInterno);
  let bot = [];
  let player = [];
  let borrados = cleanBoard();
  let jugadorPlace = document.getElementById('jugador');
  let elementoPlayer = document.createElement('div');
  elementoPlayer.id = 'jugador-Baraja';
  jugadorPlace.appendChild(elementoPlayer);
  let botPlace = document.getElementById('bot-Baraja');
  let elementoBot = document.createElement('div');
  elementoBot.id = 'cartas-bot-Baraja';
  botPlace.appendChild(elementoBot);
  let div = document.createElement('div');
  div.id = 'Botones-Play';
  div.style = 'display:flex';
  etiqueta.appendChild(div);
  let a = document.createElement('a');
  let b = document.createElement('a');
  let c = document.createElement('a');
  a.className = 'btn-neon';
  b.className = 'btn-neon';
  c.className = 'btn-neon';
  a.innerText = 'Pedir';
  b.innerText = 'Quedarse';
  c.innerText = 'OMG';
  c.addEventListener('click', (_) => {
    location.reload();
  });
  b.addEventListener('click', (_) => {
    quedar(bot, borrados, mazoVirgen);
  });
  div.appendChild(a);
  div.appendChild(b);
  div.appendChild(c);
  let s_1 = document.createElement('span');
  let s_2 = document.createElement('span');
  let s_3 = document.createElement('span');
  let s_4 = document.createElement('span');
  let s_5 = document.createElement('span');
  let s_6 = document.createElement('span');
  s_1.id = 'span1';
  s_3.id = 'span3';
  s_2.id = 'span1';
  s_4.id = 'span3';
  s_5.id = 'span1';
  s_6.id = 'span3';
  a.appendChild(s_1);
  a.appendChild(s_3);
  b.appendChild(s_2);
  b.appendChild(s_4);
  c.appendChild(s_5);
  c.appendChild(s_6);
  darInicio(mazoVirgen, bot, player);
  let scorePlayer = sumArray(player, 'player');
  scorePlayer.then(
    (valor) => {
      ponerSumEnTablero(valor, 'player');
    },
    (error) => console.log(error)
  );
  a.addEventListener('click', (_) => {
    scorePlayer.then((valorSumInicial) => {
      pedir(player, mazoVirgen, 'player', borrados, sumArray);
    });
  });
  setTimeout(() => {
    darOne(bot, 0, 'bot', borrados);
  }, 500);
  setTimeout(() => {
    darOne(bot, 1, 'bot', borrados);
  }, 2500);
  setTimeout(() => {
    darOne(player, 0, 'player', borrados);
  }, 3500);
  setTimeout(() => {
    darOne(player, 1, 'player', borrados);
  }, 5500);
}

