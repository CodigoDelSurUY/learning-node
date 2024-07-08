const express = require('express')

//es el objeto principal q nos probee express con un monton de funciones para administrar nuestra API 
// listen, get, post , put .. etc 
const app = express()

//necesario para poder parsear JSON que nuestros clientes envien en el body del request
app.use( express.json() );

const port = 3000

//Funcion necesaria para poner un proceso a escuchar requests
//Esto hace q los requests a localhost:3000 sean escuchados por nuestro servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ROUTING!
//aca explicitamos la rutas ( o paths ) que queremos q nuestro servidor escuche 
//tambien definimos para cada ruta, la funcion que queremos q se ejecute cuando se hace un request a dicha ruta


//estaremos utilizando un protocolo REST para nuestra api 
//donde la mayor convencion es la de seguir los metodos ( verbos ) http para indicar q acciones queremos hacer sobre un recurso

/* HTTP Verbs
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

GET — retrieve a specific resource (by id) or a collection of resources
POST — create a new resource
PUT — update a specific resource (by id)
DELETE — remove a specific resource by id
 */

//Aca hay una descripcion completa del REST protocol -> https://www.codecademy.com/article/what-is-rest
//Pero nosotros no seguiremos el protocolo en su maxima definicion, solo las mayores caracteristicas como los verbos y los formatos de las rutas

//Express ofrece funciones q se alinean con los http methods q vamos a utilizar

//post , get , put , delete

//Por ende aqui lo q estamos diciendo es "si alguien golpea la url localhost:3000/albums,  quiero ejecutar esta funcion ... " 


app.get('/albums', (req, res) => {
  // en este caso nuestra funcion lo unico q hace es responder , 
  // a traves del objeto q se pasa por parametro "res" , un JSON q tenemos definido en una variable de constantes
  // ( en el futuro levantaremos estos datos de la base de datos )
  res.send(ALBUMS)
})

app.get('/artists', (req, res) => {
  //lo mismo q con la ruta "/albums" pero con otro constante q tiene datos de los artistas
  res.send(ARTISTS)
})

//cuando el cliente hace un request a POST de una ruta, en este caso /artists la funcion q se ejecuta debe encargarse de INSERTAR en la base de datos un recurso
//los datos de dicho recurso podran ser leidos desde el parametro "req", en este caso req.body


app.post('/artists', (req, res) => {
  //aqui no estamos insertando nada aun , lo haremos cuando puedamos tener nuestra base de datos
  let body = req.body
  console.log("BODY",body)
  res.send({ insertado : "ok" , theBody : body})
})


//constantes hardcodeadas q simulan ser nuestra base de datos
const ALBUMS = [{
  title : "The number of the beast",
  artist : 1,
  year : 1982,
  id : 1001
},
{
    title : "Black album",
    artist : 2,
    year : 1988,
    id : 1002
}]

const ARTISTS = [{
    name : "Iron Maiden",
    isBand : true,
    country : "England",
    id : 1
},
{
    name : "Metallica",
    isBand : true,
    country : "USA",
    id : 2 
}]