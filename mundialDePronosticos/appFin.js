const { Console } = require('console');
const { Transform } = require('stream');
require('colors');

function table(input) {
  // @see https://stackoverflow.com/a/67859384
  const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
  const logger = new Console({ stdout: ts })
  logger.table(input)
  const table = (ts.read() || '').toString()
  let result = ''; 
  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, '┌');
    r = r.replace(/^├─*┼/, '├');
    r = r.replace(/│[^│]*/, '');
    r = r.replace(/^└─*┴/, '└');
    r = r.replace(/'/g, ' ');
    result += `${r}\n`; 
  }
  console.log(result.white.bold);
}

// Tabla y nombres
const test = [
  {Pos:0, Players: "Eduardo",   J: 3, G: 1, P: 2, Dif: 0, PCT: 0, DP: 0, WS: 3 },
  {Pos:0, Players: "Erycherd",  J: 3, G: 1, P: 2, Dif: 0, PCT: 0, DP: 0, WS: 0 },
  {Pos:0, Players: "Christian", J: 3, G: 2, P: 1, Dif: 0, PCT: 0, DP: 0, WS: 0 },
  {Pos:0, Players: "CarlosJ",   J: 3, G: 2, P: 1, Dif: 0, PCT: 0, DP: 0, WS: 1 },
  {Pos:0, Players: "Daniel",    J: 3, G: 3, P: 0, Dif: 0, PCT: 0, DP: 0, WS: 0 },
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

                    😩 Erycherd  😩
        😩  Dice que juega arriesgando 😩
        😩 y no tiene nada que demostrar 😩
`.green.bold);

console.log('           A Steven se le salió la 💩💩💩💩💩           '.bgGreen.white.bold);
table(test);
