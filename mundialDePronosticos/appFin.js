const { Console } = require('console');
const { Transform } = require('stream');
require('colors');

// function table(input) {
// @see https://stackoverflow.com/a/67859384
//   const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
//   const logger = new Console({ stdout: ts })
//   logger.table(input)
//   const table = (ts.read() || '').toString()
//   let result = ''; 
//   for (let row of table.split(/[\r\n]+/)) {
//     let r = row.replace(/[^┬]*┬/, '┌');
//     r = r.replace(/^├─*┼/, '├');
//     r = r.replace(/│[^│]*/, '');
//     r = r.replace(/^└─*┴/, '└');
//     r = r.replace(/'/g, ' ');
//     result += `${r}\n`; 
//   }
//   console.log(result.white.bold);
// }

function table(input) {
  const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } });
  const logger = new Console({ stdout: ts });
  logger.table(input);
  const table = (ts.read() || '').toString();
  
  let result = ''; 
  let isFirstRow = true;

  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, '┌');
    r = r.replace(/^├─*┼/, '├');
    r = r.replace(/│[^│]*/, '');
    r = r.replace(/^└─*┴/, '└');
    r = r.replace(/'/g, ' ');

    // Aplico color al que va de primero
    if (isFirstRow && /\b1\b/.test(r)) {
      result += `${r.white.bgGreen}\n`;
      isFirstRow = false; // Para no afectar otras filas
    } else {
      result += `${r}\n`;
    }
  }
  
  console.log(result.white.bold);
}

// Tabla y nombres
const test = [
  {Pos:0, Players: "Eduardo",   J: 30, G: 19,  P: 8,  Dif: 0, PCT: 0, Titulos: 3 }, //! El LIDEL
  {Pos:0, Players: "CarlosJ",   J: 30, G: 20,  P: 7,  Dif: 0, PCT: 0, Titulos: 1 }, //! Milton Jose
  {Pos:0, Players: "Erycherd",  J: 30, G: 19,  P: 8,  Dif: 0, PCT: 0, Titulos: 0 }, //! Mierdycherd
  {Pos:0, Players: "Christian", J: 30, G: 19,  P: 8,  Dif: 0, PCT: 0, Titulos: 0 }, //! CR96
  {Pos:0, Players: "Daniel",    J: 30, G: 14,  P: 13, Dif: 0, PCT: 0, Titulos: 0 }, //! xxxx
];

// Ordenar por juegos ganados y luego alfabéticamente
test.sort((a, b) => {
  if (b.G !== a.G) return b.G - a.G;
  // return a.Players.localeCompare(b.Players);
});

// Asignar Pos, Diferencia y PCT en un solo ciclo
test.forEach((element, index) => {
  element.Pos = index + 1;
  element.Dif = Math.abs(element.G - test[0].G);
  element.PCT = Math.round((element.G / element.J) * 1000);
});

// Mensajes
console.log(`
           
      ⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾
      🔥                                        🔥
      🔥    Mundial de pronósticos Temp 2025    🔥
      🔥    Mundial de pronósticos Temp 2025    🔥  
      🔥    Mundial de pronósticos Temp 2025    🔥  
      🔥                                        🔥
      ⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾
 
              😩 Carlos Jose 😩
      😩   Mano, de pana Busca ayuda 😩
 😩 Marico estas nublado, ese tipo de cosas se tratan 😩
        😩 De pana mano. Ojala te aclares.😩
        😩 Y Aclara tambien lo de Kledy.😩
`.white.bold);

console.log('      No olviden quien es el maximo lider y ganador👑     '.bgGreen.white.bold);
table(test);