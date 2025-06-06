// UI helper functions
export function endGame(Ente) {
  swal.fire({
    title: "El ganador es : " + Ente,
    text: "Buen juego",
    width: "20%",
    showConfirmButton: true,
    icon: "warning",
  });

  setTimeout(() => { reset(); }, 30000);
}

export function ganador(resultadoBot, resultadoPlayer) {
  resultadoBot = 21 - resultadoBot;
  resultadoPlayer = 21 - resultadoPlayer;

  if (resultadoBot > resultadoPlayer && resultadoBot < 21) {
    endGame("BOT");
  } else if (resultadoBot == resultadoPlayer) {
    document.write("Nadie gano y todos se murieron");
  } else if (resultadoBot < resultadoPlayer && resultadoPlayer < 21) {
    endGame("player");
  }
}

export function cleanBoard() {
  let etiqueta = document.getElementById("bot-Baraja");
  let especificoInterno = document.getElementById("cart");
  let borrados = etiqueta.removeChild(especificoInterno);
  return borrados;
}

export function ponerSumEnTablero(sum, ente) {
  console.log(ente);
  let child = document.createElement("h6");

  if (
    document.getElementById("hollow") == null &&
    document.getElementById("playerScore") != null &&
    ente == "player"
  ) {
    document.getElementById("scoreEnd").innerText = "PLAYER : " + sum;
  } else if (
    document.getElementById("jack") == null &&
    document.getElementById("BotScore") != null &&
    ente == "Bot"
  ) {
    console.log("Dentro de Bot");
    document.getElementById("scoreEndBot").innerText = "Bot : " + sum;
  } else {
    console.log("unaVez");

    if (document.getElementById("hollow") != null) {
      document
        .getElementById("playerScore")
        .removeChild(document.getElementById("hollow"));
    } else if (document.getElementById("jack") != null) {
      document
        .getElementById("BotScore")
        .removeChild(document.getElementById("jack"));
    }

    console.log(ente);
    let place = "";

    if (ente == "player") {
      place = document.getElementById("playerScore");
      child.innerText = "PLAYER : " + sum;
      child.id = "scoreEnd";
      place.appendChild(child);
    } else {
      console.log("Primera entrada en tablero BOT");
      place = document.getElementById("BotScore");
      child.innerText = "Bot : " + sum;
      child.id = "scoreEndBot";
      place.appendChild(child);
    }
  }
}

export function reset() {
  location.reload();
}
