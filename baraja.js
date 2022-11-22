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