const { Console } = require('console');
const { Transform } = require('stream');
require('colors');

// function table(input) {
// // @see https://stackoverflow.com/a/67859384
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
  {Pos:0, Players: "Eduardo",   J: 113, G: 75,  P: 38,  Dif: 0, PCT: 0, Titulos: 3 }, //! El LIDEL
  {Pos:0, Players: "Christian", J: 110, G: 72,  P: 38,  Dif: 0, PCT: 0, Titulos: 0 }, //! CR96
  {Pos:0, Players: "Erycherd",  J: 113, G: 67,  P: 46,  Dif: 0, PCT: 0, Titulos: 0 }, //! Mierdycherd
  {Pos:0, Players: "Daniel",    J: 113, G: 64,  P: 49,  Dif: 0, PCT: 0, Titulos: 0 }, //! xxxx
  {Pos:0, Players: "Kleydi",    J: 113, G: 63,  P: 50,  Dif: 0, PCT: 0, Titulos: 0 }, //! xxxx
  // {Pos:0, Players: "CarlosJ",   J: 33, G: 23,  P: 10,  Dif: 0, PCT: 0, Titulos: 1 }, //! Milton Jose
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
  
           🔥 Copa "El Regreso de Kleydi 🔥
           🔥 Y la salida de Milton estafa" 🔥
       😩 Ya lo de Daniel es caso de estudio.😩
             😩 Nunca termina las cosas 😩
`.white.bold);

console.log('       No olviDEn qUien es el mAximo lideR y ganaDOr👑     '.bgGreen.white.bold);
table(test);