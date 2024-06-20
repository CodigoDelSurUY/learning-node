const fs = require('fs')
const util = require('util');


//definimos una funcion propia, q es basicamente una version de fs.readFile q funciona como una Promise
//tenemos q hacer esto para poder usar async/await
const nuestraReadFile = util.promisify(fs.readFile);


/*** este script lee 2 archivos de 2 maneras 
 * 
 * con callbacks usando la function readFile del modulo fs 
 * y con async/await
 */

/* VERSION CON CALLBACKS */ 
/* 

Aca vemos como funcionan las callbacks, donde se debe anidar la invocacion de fs.readFile para el archivo #2 para poder
lograr q primero se lea el archivo #1 y luego el #2

fs.readFile('./myarchivo.txt', 'utf8', (err, data) => {
    
    console.log("funcion invocada")
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("Ya tengo el archivo!!")

    fs.readFile('./archivo2.txt', 'utf8', (err, data) => {
    
        
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        console.log("Ya tengo el archivo 2!!")
      });
  });

*/



/* VERSION CON ASYNC AWAIT */
async function run(){
    //usamos nuestra funcion propia para leer el archivo
    //siempre aca se leera primero myarchivo y luego archivo2
    let data = await nuestraReadFile('./myarchivo.txt','utf8')
    console.log("DATA",data)
    let data2 = await nuestraReadFile('./archivo2.txt','utf8')
    console.log("DATA2",data2)
}

/* 

Ejemplos de codigo "malo" debido al mal manejo de asincronizidad

let file = fs.readFile('./myarchivo.txt', 'utf8', (err, data) => {
    
    console.log("funcion invocada")
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("Ya tengo el archivo!!")
})

console.log()


Este codigo anda mal por 2 motivos

1 - fs.readFile no returna el contenido del file, asi q file va a ser siempre undefined
2 - SIEMPRE se va a ejecutar el log "Bien! ya tengo mi file y su contenido es: undefined" ANTES de obtener el archivo

Esto es xq node encola la lectura del archivo y sigue adelante con las siguentes lineas

el orden de los logs seria 

Bien! ya tengo mi file y su contenido es: undefined
funcion invocada
data
Ya tengo el archivo!!

Lo cual es malo xq significa q no podemos ejecutar el codigo "linealmente" como en otros lenguajes


*/

run()