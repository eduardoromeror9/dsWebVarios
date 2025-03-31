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
  {Pos:0, Players: "Eduardo",   J: 9, G: 7, P: 2, Dif: 0, PCT: 0, DP: 2, WS: 3 },
  {Pos:0, Players: "Erycherd",  J: 9, G: 5, P: 4, Dif: 0, PCT: 0, DP: 0, WS: 0 },
  {Pos:0, Players: "Christian", J: 9, G: 6, P: 3, Dif: 0, PCT: 0, DP: 0, WS: 0 },
  {Pos:0, Players: "CarlosJ",   J: 9, G: 6, P: 3, Dif: 0, PCT: 0, DP: 0, WS: 1 },
  {Pos:0, Players: "Daniel",    J: 6, G: 5, P: 1, Dif: 0, PCT: 0, DP: 1, WS: 0 },
];

// Ordenar por juegos ganados y luego alfabéticamente
test.sort((a, b) => {
  if (b.G !== a.G) return b.G - a.G;
  return a.Players.localeCompare(b.Players);
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
 
                  😩 Daniel 😩
     😩   Mano, de pana Busca ayuda 😩
     😩 No puede que siempre dejas todo a medias 😩
      😩 Hay que ser responsable para todo 😩
      😩 Debes 3 juegos hijo del Diablo 😩

`.green.bold);

console.log('           A Steven se le salió la 💩💩💩💩💩          '.bgGreen.white.bold);
table(test);